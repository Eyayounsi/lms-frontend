# ─── Stage 1: Build Angular ───────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .
RUN npx ng build --configuration production

# ─── Stage 2: Nginx ───────────────────────────────────────────────────────────
FROM nginx:1.27-alpine

# Generate self-signed SSL certificate (needed for camera/getUserMedia on non-localhost)
RUN apk add --no-cache openssl && \
    mkdir -p /etc/nginx/ssl && \
    openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
      -keyout /etc/nginx/ssl/nginx.key \
      -out    /etc/nginx/ssl/nginx.crt \
      -subj   "/CN=20.19.48.7/O=LMS/C=TN"

COPY --from=builder /app/dist/template /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200 4443

CMD ["nginx", "-g", "daemon off;"]
