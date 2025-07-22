# --- 빌드 스테이지 ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# --- 런타임 스테이지 (nginx + Node.js) ---
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app .

EXPOSE 80

CMD ["npm", "run", "start", "--", "-p", "80"] 