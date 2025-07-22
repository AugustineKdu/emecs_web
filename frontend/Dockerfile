# --- 빌드 스테이지 ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- 런타임 스테이지 (nginx + Node.js) ---
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app .

# nginx 설치
RUN apk add --no-cache nginx openssl
COPY nginx.conf /etc/nginx/nginx.conf
COPY generate-local-ssl.sh /generate-local-ssl.sh

# 로컬 개발용 자체 서명 인증서 자동 생성 (운영 환경에서는 무시)
RUN sh /generate-local-ssl.sh || true

# Next.js 서버는 3000포트, nginx는 80/443포트
EXPOSE 80
EXPOSE 443
EXPOSE 3000

# nginx 실행 & Next.js 서버 실행 (forever)
CMD ["sh", "-c", "nginx && npm run start"] 