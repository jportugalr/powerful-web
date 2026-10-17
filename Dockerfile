# syntax=docker/dockerfile:1

FROM node:24-bookworm-slim AS dependencies
WORKDIR /app
RUN chown node:node /app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

FROM dependencies AS development
COPY --chown=node:node astro.config.mjs tsconfig.json ./
COPY --chown=node:node src ./src
COPY --chown=node:node public ./public
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--port", "4321"]

FROM development AS build
RUN npm run check && npm run build

FROM nginx:1.29-alpine AS runtime
# Remove the image's welcome page, including when Astro has no pages yet.
RUN rm -rf /usr/share/nginx/html/*
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
USER nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
