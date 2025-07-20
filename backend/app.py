from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/health')
def health_check():
    return jsonify({'status': 'ok'})

@app.route('/api/hello')
def hello():
    return jsonify({'message': '안녕하세요, 백엔드 서버가 정상 동작합니다!'})

if __name__ == '__main__':
    print("🚀 서버 시작...")
    print("📍 URL: http://localhost:5001")
    app.run(host='0.0.0.0', port=5001)