# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)에서 이 저장소의 코드 작업 시 가이드를 제공합니다.

## 프로젝트 개요

**kgency_landingPage**는 외국인 구인구직 플랫폼 링크잡(LinkJob)의 랜딩 페이지입니다.

## 기술 스택

- **프레임워크**: React 19 + Vite 7
- **언어**: TypeScript 5.8
- **스타일링**: TailwindCSS 4.1 (Vite 플러그인 사용)
- **다크모드**: 지원
- **배포**: Static hosting 준비

## 개발 명령어

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 결과 미리보기
- `npm run lint` - ESLint 실행

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Header, Footer, Button 등)
│   └── sections/       # 랜딩페이지 섹션별 컴포넌트
├── pages/              # 페이지 컴포넌트
├── styles/             # 글로벌 스타일
├── hooks/              # 커스텀 훅 (useTheme 등)
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수 및 상수
```

## 주요 기능

- 반응형 디자인 (모바일/태블릿/데스크톱)
- 다크모드 토글
- linkjob.kr 웹사이트 연결
- 앱스토어/플레이스토어 다운로드 링크
- Footer에 정책/약관 페이지 링크

## 콘텐츠 구성

1. **Hero Section** - 메인 배너
   - 헤드라인: "외국인과 기업을 연결하는 구인구직 플랫폼"
   - CTA 버튼: 웹사이트 접속, 앱 다운로드

2. **Features** - 주요 기능 소개 (4가지)
   - 맞춤형 매칭, 실시간 채팅, 다국어 지원, 비자별 채용

3. **Target Users** - 대상 사용자
   - 외국인 구직자, 기업 채용담당자

4. **How It Works** - 3단계 프로세스
   - 가입 → 지원 → 채팅

5. **App Download** - 앱 다운로드 섹션

6. **Footer** - 정책/약관 링크
   - 계정 삭제, 문의, FAQ, 개인정보처리방침, 환불정책, 이용약관

## TailwindCSS 설정

- **TailwindCSS 4.1** 사용 (최신 버전)
- **Vite 플러그인** 방식으로 설정
- **다크모드**: `class` 기반으로 구현
- **반응형**: 모바일 first 접근

## 외부 링크

- **웹사이트**: linkjob.kr
- **iOS 앱**: App Store 링크
- **Android 앱**: Google Play Store 링크

## 디자인 가이드

- 깔끔하고 모던한 디자인
- 외국인 구인구직 플랫폼에 적합한 UI/UX
- 다크모드 지원으로 사용자 경험 향상
- 접근성 고려한 컬러 대비 및 폰트 크기

## Footer 정책 페이지

기존 링크잡 앱의 랜딩 페이지 정책들을 포함:
- 계정삭제 (account-deletion)
- 문의 (contact)
- FAQ (faq)
- 개인정보처리방침 (privacy-policy)
- 환불정책 (refund-policy)
- 이용약관 (terms-of-service)