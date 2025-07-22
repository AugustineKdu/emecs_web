#!/bin/sh
set -e
CERT_DIR=/etc/ssl/localcerts
mkdir -p $CERT_DIR
if [ ! -f "$CERT_DIR/localhost.crt" ] || [ ! -f "$CERT_DIR/localhost.key" ]; then
  echo "[INFO] 로컬용 자체 서명 인증서 생성 중..."
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout $CERT_DIR/localhost.key \
    -out $CERT_DIR/localhost.crt \
    -subj "/CN=localhost"
  echo "[INFO] 생성 완료: $CERT_DIR/localhost.crt, $CERT_DIR/localhost.key"
else
  echo "[INFO] 이미 인증서가 존재합니다: $CERT_DIR/localhost.crt, $CERT_DIR/localhost.key"
fi 