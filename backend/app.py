from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from dotenv import load_dotenv

# 환경 변수 로드
load_dotenv()

app = Flask(__name__)

# CORS 설정 - 환경 변수에서 허용할 오리진 읽기
cors_origins = os.getenv('CORS_ORIGINS', 'http://localhost:3000').split(',')
CORS(app, origins=cors_origins)

# 제품 데이터
PRODUCTS_DATA = {
    "3-phase-induction": {
        "id": "3-phase-induction",
        "title": {
            "ko": "3상 유도 전동기",
            "en": "3-Phase Induction Motor"
        },
        "description": {
            "ko": "회전자계에 의해 회전자에 유도전류가 발생하여 구동되는 원리로, 구조가 간단하고 견고하여 가장 널리 사용됩니다. 당사는 IE5 등급까지 설계 및 제작이 가능합니다.",
            "en": "Operating on the principle of induced current in the rotor by rotating magnetic field. Simple and robust structure makes it the most widely used. We can design and manufacture up to IE5 efficiency class."
        },
        "specifications": {
            "power_range": "0.75kW ~ 500kW",
            "poles": [2, 4, 6, 8],
            "efficiency_grades": ["IE3", "IE4", "IE5"],
            "protection_ratings": ["IP55", "IP65"]
        },
        "available": True
    },
    "high-speed": {
        "id": "high-speed", 
        "title": {
            "ko": "고속 전동기",
            "en": "High-Speed Motor"
        },
        "description": {
            "ko": "10,000 ~ 50,000 RPM의 초고속 회전이 가능한 전문 전동기입니다. 정밀 밸런싱과 특수 베어링을 사용하여 안정적인 고속 운전을 보장합니다.",
            "en": "Specialized motor capable of ultra-high-speed rotation from 10,000 to 50,000 RPM. Uses precision balancing and special bearings to ensure stable high-speed operation."
        },
        "specifications": {
            "rpm_range": "10,000 ~ 50,000 RPM",
            "power_range": "1kW ~ 100kW",
            "applications": ["터보 압축기", "고속 스핀들", "원심분리기"],
            "special_features": ["정밀 밸런싱", "특수 베어링", "진동 최소화"]
        },
        "available": True
    },
    "wfsm": {
        "id": "wfsm",
        "title": {
            "ko": "권선형 동기 전동기 (WFSM)",
            "en": "Wound Field Synchronous Motor (WFSM)"
        },
        "description": {
            "ko": "회전자에 권선을 감아 전자석으로 만드는 방식으로, 영구자석이 필요 없어 희토류를 사용하지 않습니다. 역률 제어가 가능하고 높은 효율을 달성할 수 있습니다.",
            "en": "Uses electromagnets created by winding coils on the rotor, eliminating the need for permanent magnets and rare-earth materials. Enables power factor control and achieves high efficiency."
        },
        "specifications": {
            "power_range": "5kW ~ 1000kW",
            "efficiency": "IE5+",
            "power_factor_control": True,
            "rare_earth_free": True,
            "expected_release": "2025 H2"
        },
        "available": False
    }
}

# 포트폴리오 데이터  
PORTFOLIO_DATA = [
    {
        "id": 1,
        "program": {
            "ko": "에너지자원기술개발사업(지경부)",
            "en": "Energy Resource Technology Development (MOTIE)"
        },
        "project_name": {
            "ko": "에너지절약형 인버터구동 전동기 개발 (2.5kW, 4.5kW, 30kW, 60kW 고속 고효율 전동기 시스템)",
            "en": "Energy-Saving Inverter-Driven Motor Development (2.5kW, 4.5kW, 30kW, 60kW High-Speed High-Efficiency Motor Systems)"
        },
        "period": "2012.06 - 2014.12",
        "role": {
            "ko": "연구책임자",
            "en": "PI"
        },
        "category": "efficiency",
        "highlight": True
    },
    {
        "id": 2,
        "program": {
            "ko": "한국전기연구원",
            "en": "KERI"
        },
        "project_name": {
            "ko": "EV용 전기부품 성능평가 및 가속전원 사업",
            "en": "EV Electric Component Performance Evaluation and Power Supply Business"
        },
        "period": "2011.01 - 2014.12",
        "role": {
            "ko": "연구책임자",
            "en": "PI"
        },
        "category": "ev",
        "highlight": True
    },
    {
        "id": 3,
        "program": {
            "ko": "한국전기연구원",
            "en": "KERI"
        },
        "project_name": {
            "ko": "전기자동차용 고효율 전동기 및 제어기 개발",
            "en": "High-Efficiency Motor and Controller Development for Electric Vehicles"
        },
        "period": "2010.01 - 2011.01",
        "role": {
            "ko": "연구책임자",
            "en": "PI"
        },
        "category": "ev",
        "highlight": True
    },
    {
        "id": 4,
        "program": {
            "ko": "에너지절약기술 개발(지경부)",
            "en": "Energy Conservation Technology Development"
        },
        "project_name": {
            "ko": "37kW이하 고효율 유도전동기 공통코어기술개발 방법 (중대형 과제)",
            "en": "37kW and Below High-Efficiency Induction Motor Common Core Technology Development"
        },
        "period": "2009.06 - 2012.05",
        "role": {
            "ko": "총괄책임자",
            "en": "GM"
        },
        "category": "efficiency",
        "highlight": True
    },
    {
        "id": 5,
        "program": {
            "ko": "산업기반조성사업(지경부)",
            "en": "Industrial Infrastructure Development"
        },
        "project_name": {
            "ko": "차세대 신입종 Green 전동기 시스템 플랫폼 기술개발",
            "en": "Next-Generation Green Motor System Platform Technology Development"
        },
        "period": "2009.05 - 2012.04",
        "role": {
            "ko": "총괄책임자",
            "en": "GM"
        },
        "category": "platform",
        "highlight": True
    }
]

# 회사 정보
COMPANY_DATA = {
    "about": {
        "ko": "EMECS는 20년간 축적된 전동기 설계 기술로 최적의 에너지 효율 솔루션을 제공합니다.",
        "en": "EMECS provides optimal energy efficiency solutions with 20 years of motor design expertise."
    },
    "contact": {
        "address": "대한민국 창원시",
        "phone": "+82-55-000-0000", 
        "email": "info@emecs.kr"
    },
    "qa": [
        {
            "question": {
                "ko": "왜 EMECS를 선택해야 하나요?",
                "en": "Why choose EMECS?"
            },
            "answer": {
                "ko": "20년 이상 국가 핵심 산업 프로젝트를 이끌어온 전문가가 직접 설계합니다. 대기업과 정부 프로젝트에서 검증된 기술력으로 귀사에 최적화된 솔루션을 제공합니다.",
                "en": "Designed directly by experts with over 20 years of experience leading national core industrial projects. We provide solutions optimized for your company with technology proven in major corporate and government projects."
            }
        }
    ]
}

@app.route('/api/health')
def health_check():
    return jsonify({'status': 'ok', 'message': '백엔드 서버가 정상 동작중입니다.'})

@app.route('/api/products')
def get_products():
    """모든 제품 정보 반환"""
    return jsonify({
        'success': True,
        'data': list(PRODUCTS_DATA.values())
    })

@app.route('/api/products/<product_id>')
def get_product(product_id):
    """특정 제품 정보 반환"""
    if product_id in PRODUCTS_DATA:
        return jsonify({
            'success': True,
            'data': PRODUCTS_DATA[product_id]
        })
    else:
        return jsonify({
            'success': False,
            'error': 'Product not found'
        }), 404

@app.route('/api/portfolio')
def get_portfolio():
    """포트폴리오 데이터 반환"""
    category = request.args.get('category', 'all')
    
    if category == 'all':
        filtered_data = PORTFOLIO_DATA
    else:
        filtered_data = [p for p in PORTFOLIO_DATA if p.get('category') == category]
    
    return jsonify({
        'success': True,
        'data': filtered_data,
        'total': len(filtered_data)
    })

@app.route('/api/company')
def get_company_info():
    """회사 정보 반환"""
    return jsonify({
        'success': True,
        'data': COMPANY_DATA
    })

@app.route('/api/roi/calculate', methods=['POST'])
def calculate_roi():
    """ROI 계산"""
    try:
        data = request.get_json()
        
        # 기본 파라미터
        motor_power_hp = data.get('motorPowerHP', 10)
        operating_hours_per_day = data.get('operatingHoursPerDay', 12)
        operating_days_per_year = data.get('operatingDaysPerYear', 365)
        load_factor = data.get('loadFactor', 1.0)
        electricity_rate_krw = data.get('electricityRateKRW', 170)
        electricity_rate_usd = data.get('electricityRateUSD', 0.077)
        
        # 효율값
        ie3_efficiency = data.get('ie3Efficiency', 91.7)
        ie4_efficiency = data.get('ie4Efficiency', 92.4)
        ie5_efficiency = data.get('ie5Efficiency', 93.8)
        
        # 연간 운전시간
        annual_operating_hours = operating_hours_per_day * operating_days_per_year
        
        # ROI 계산 공식: S = 0.746 × HP × L × N × (100/E₃ - 100/E₄)
        def calculate_savings(from_eff, to_eff):
            savings_kwh = 0.746 * motor_power_hp * load_factor * annual_operating_hours * (100/from_eff - 100/to_eff)
            return {
                'krw': savings_kwh * electricity_rate_krw,
                'usd': savings_kwh * electricity_rate_usd,
                'energy_saved': savings_kwh
            }
        
        ie4_savings = calculate_savings(ie3_efficiency, ie4_efficiency)
        ie5_savings = calculate_savings(ie3_efficiency, ie5_efficiency)
        
        return jsonify({
            'success': True,
            'data': {
                'IE4': {
                    'efficiency_gain': round(((ie4_efficiency - ie3_efficiency) / ie3_efficiency * 100), 1),
                    'annual_savings': ie4_savings
                },
                'IE5': {
                    'efficiency_gain': round(((ie5_efficiency - ie3_efficiency) / ie3_efficiency * 100), 1),
                    'annual_savings': ie5_savings
                }
            }
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    host = os.getenv('HOST', '0.0.0.0')
    debug = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'
    
    print("🚀 EMECS 백엔드 서버 시작...")
    print(f"📍 URL: http://{host}:{port}")
    print(f"🌐 CORS 설정: {cors_origins}")
    print(f"🔧 디버그 모드: {debug}")
    
    app.run(host=host, port=port, debug=debug)