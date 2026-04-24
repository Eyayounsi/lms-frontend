# ─── Stage 1: Build Angular ───────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .
RUN npx ng build --configuration production

# ─── Stage 2: Nginx ───────────────────────────────────────────────────────────
FROM nginx:1.27-alpine
COPY --from=builder /app/dist/template /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
