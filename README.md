# Rentcar Netlify

Netlify에 바로 업로드할 수 있는 실제 예약용 렌트카 홈페이지입니다.

## 현재 포함 기능

- 차량 9대 기본 라인업
- FullCalendar 기반 실시간 예약 캘린더
- Netlify Functions + Netlify Blobs 예약 저장
- 중복 일정 자동 차단
- 예약번호 자동 발급
- 공개 캘린더 개인정보 비노출 처리
- EmailJS 예약 알림 발송
- 숨겨진 관리자 모드
- 관리자 화면에서 차량 카드/옵션 직접 편집
- 간단한 스팸 방지용 허니팟 필드

## 실제 배포 순서

1. Netlify에 이 폴더를 새 사이트로 연결합니다.
2. 배포 시 `npm install`이 실행되어 `@netlify/blobs`가 설치되게 둡니다.
3. `config.js`에서 EmailJS 값을 실제 값으로 바꿉니다.
4. Netlify 환경변수에 `ADMIN_SECRET` 을 추가합니다.
5. 배포 후 예약은 `/.netlify/functions/bookings`를 통해 저장되고 공개 캘린더에 반영됩니다.

## 숨겨진 관리자 모드

- 사이트 좌측 상단 로고를 빠르게 5번 누르면 관리자 모달이 열립니다.
- 또는 `?admin=1` 쿼리로 접근해도 관리자 모달이 열립니다.
- 관리자 비밀번호는 Netlify 환경변수 `ADMIN_SECRET` 값과 동일해야 합니다.
- 관리자 저장 후 차량 카드, 옵션 카드, 예약 폼 옵션이 동시에 갱신됩니다.

## EmailJS 연결 방법

### 1. EmailJS에서 준비할 것

- Email Service 생성
- Email Template 생성
- Public Key 확인

### 2. `config.js`에 넣을 값

아래 파일에서 실제 값으로 바꿉니다.

- `publicKey`: EmailJS Public Key
- `serviceId`: EmailJS Service ID
- `templateId`: EmailJS Template ID

### 3. 현재 프로젝트가 EmailJS로 보내는 변수

- `company_name`
- `company_phone`
- `company_email`
- `booking_code`
- `vehicle_name`
- `customer_name`
- `customer_phone`
- `customer_email`
- `start_date`
- `end_date`
- `pickup_location`
- `passengers`
- `flight_number`
- `selected_options`
- `message`

### 4. 추천 템플릿 제목 예시

`[{{company_name}}] 신규 예약 {{booking_code}} / {{customer_name}}`

### 5. 추천 템플릿 본문 예시

```text
렌트카 신규 예약이 접수되었습니다.

예약번호: {{booking_code}}
업체명: {{company_name}}
업체 연락처: {{company_phone}}
업체 이메일: {{company_email}}

차량명: {{vehicle_name}}
고객명: {{customer_name}}
연락처: {{customer_phone}}
이메일: {{customer_email}}

대여 시작일: {{start_date}}
반납일: {{end_date}}
픽업 위치: {{pickup_location}}
탑승 인원: {{passengers}}
항공편: {{flight_number}}
선택 옵션: {{selected_options}}
추가 요청사항: {{message}}
```

### 6. 받는 메일 설정 팁

- 관리자 메일로 받고 싶으면 EmailJS 템플릿의 To Email을 관리자 메일로 설정합니다.
- 고객에게도 보내고 싶으면 EmailJS에서 별도 템플릿을 하나 더 만들거나, 자동응답 템플릿을 추가하는 방식이 가장 깔끔합니다.

### 7. 운영 시 주의

- EmailJS는 프론트에서 동작하므로 Public Key, Service ID, Template ID는 브라우저에서 보일 수 있습니다.
- EmailJS 대시보드에서 허용 도메인을 Netlify 도메인으로 제한하는 것을 권장합니다.
- 메일이 실패해도 현재 구조에서는 예약 자체는 Netlify에 저장됩니다.

## 운영 메모

- 현재 구조는 공개 사용자 예약과 숨겨진 관리자 편집까지 동작하도록 잡혀 있습니다.
- 차량 이미지도 관리자 모드에서 URL로 바꿀 수 있습니다.
- 실제 운영에서는 CAPTCHA, 관리자 전용 예약 조회 화면, 예약 취소/수정 기능을 추가하면 더 안전합니다.
