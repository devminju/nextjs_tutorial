## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Summary

### Ch.2 Css Styling

1. global style은 루트 컴포넌트에서 import 한다.
2. taliwind 는 클래스를 빠르게 작성할 수 있어 개발 속도가 빨라진다.
3. CSS Module 은 자동으로 고유 클래스 이름을 생성하기 때문에 스타일 출동을 방지한다.
4. tailwind와 CSS Module은 같이 사용 가능하다.
5. clcx 라이브러리로 조건부 스타일 지정이 가능하다.

### Ch.3 Optimizing Fonts and Images

1. `next/font` 를 사용하면 자동으로 font 최적화가 된다.
   font를 위한 api 를 따로 호출하지 않기 때문에 늦은 font 다운로드로 UI가 깨지는 현상이 없다.
2. `next/image` 를 사용하면 자동으로 image 최적화가 된다.

### Ch.4 Creating Layouts and Pages

1. 경로는 파일 시스템 경로를 사용해서 만든다.

   - 루트 폴더인 `app` 폴더 하위에 폴더를 생성하고, 해당 폴더 내에 `page.tsx` 파일을 생성하면 폴더 명으로 경로가 생성된다.
   - 중첩해서 경로를 생성하고 싶다면 폴더 내에 폴더를 중첩해서 생성하면 된다.

2. layout.tsx
   - page의 구성을 만든다. 여러 페이지에서 공유되는 layout 을 만드는 것이 좋다.
   - 폴더 내에 layout.tsx 파일을 만들어 생성한다. 따로 import 하지 않아도 생성하는것 만으로 layout이 적용된다.

### Ch.5 Navigating Between Pages

1. <Link> Component
   - <a> 태그 대체. 전체 페이지가 새로 고침되는 단점을 보완함
   - route segment 별로 code splits 하기 때문에 빠른 렌더 가능, 페이지에서 에러가 나도 다른 페이지는 정상 작동함
   - <Link> component가 브라우저 뷰포트에 나타날때 마다 링크된 경로의 코드 미리 가져오기 때문에 페이지 전환 빠름

2. 활성 링크 표시: `usePathname()`

   - client component에서만 사용 가능한 hook

3. Client Component vs Server Component

   - **Client Component**

     - 상호작용: state, event listener 사용 가능. UI 업데이트 가능
     - broswer api 사용 가능
     - 파일 상단에 `'use client'` 선언후 사용
     - `'use client'` 선언 후에도 서버 환경으로 돌아갈 수 있음

   - **Server Component**

   - **Rendering**
     1. 최초 렌더링: SSR, CSR
        (server 측)
        1. React에서 RSC Payload 사용해서 server component 렌더링
        2. Next.js 가 RSC Payload, client component의 js 사용하여 HTML 렌더링
           (아래 부터 client 측)
        3. HTML에서 미리보기 화면 보여줌
        4. RSC Payload 사용해 server component, client component 합치고, DOM 업데이트
        5. js 명령어 사용해 client component 동적으로 작동하도록 함, DOM에 event listener 연결, 상호작용 가능한 UI 만듦
     2. 최초 렌더링 이후: CSR
        client component js bundle이 다운로드 되면 파싱 후 RSC Payload 사용하여 client component와 server component 합치고, DOM 에 업데이트
     - RSC Playload
       server component 트리 구조의 바이너리 파일. client component 참조가 포함되어있음.

### Ch.6 DataBase Settings

1. github과 vercel 연동 및 배포
2. vercel의 Postgres database 연동
3. database seeding

- Database Seeding: DB에 초기 데이터를 삽입하거나 초기 설정을 하는 작업
  주로 개발 과정에서 테스트 데이터나 필수 데이터를 DB에 자동으로 채워 넣을 때 사용
- Vercel Storage: vercel의 database 서비스. 서버리스 방식으로 동작
  4종류 DB 제공: Vercel KV, Vercel Postgres, Vercel Blob, Vercel Edge Config
- Vercel Postgres: PostgreSQL 기반 관계형 데이터베이스

### Ch.7 [Fetching Data](https://nextjs.org/learn/dashboard-app/fetching-data)

1. 데이터 가져오는 방법

   1. API Layer

      - Next.js의 **API Routes (pages/api/)**를 이용해 백엔드 API를 생성하고, 클라이언트에서 이를 호출하여 데이터를 가져오는 방식
      - 사용하는 경우: API를 제공하는 타사 서비스를 사용하는 경우, DB 보안이 중요한 경우
      - 클라이언트, 서버 간 역할 명확히 구분, API 호출이 추가되므로 성능이 다소 저하될 수 있음

   2. Database queries

      - Next.js의 API Routes에서 데이터베이스와 상호작용시 사용
      - Server Components 에서 데이터베이스와 상호작용시 사용
      - 클라이언트에서 직접 DB에 접근하는 것은 보안상 위험하므로, 항상 서버 측에서 처리 해야함

   3. Server Components 사용

      - Next.js 13부터 도입된 Server Components를 사용하여 서버에서 직접 데이터를 가져오는 방식
      - API 계층 없이 데이터베이스에 데이터를 불러와 렌더링할 수 있어 성능 향상
      - JavaScript Promises를 지원. 다른 data fetching 라이브러리 사용하지 않고 async/await 사용 가능 (useEffect, useState 사용 불필요)

   4. SQL 사용

2. Request Waterfalls

   - 여러개의 네트워크 요청이 순차적으로 실행되는 상황 의미 e.g. await를 연이어 사용하는 경우
   - 사용하는 경우: 이전 요청의 값이 다음 요청에 사용되는 경우
     e.g. id를 가져오는 api 호출 후 -> id를 사용해 정보를 조회하는 api 호출
   - 단점: 총 요청시간이 증가함 -> 병렬 데이터 페칭 사용

3. 병렬 데이터 페칭

   - 모든 데이터 요청을 동시에 하는 방법
   - js에서 Promise.all() 또는 Promise.allSettled() 사용

### Ch.8 [Static and Dynamic Rendering](https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering)

1. 정적 렌더링

   - 데이터 제공 및 렌더링 시점: 빌드시 (배포할 때 미리 생성)
   - 데이터 변경: 새로운 빌드 필요
   - 장점:
     - 빠름: CDN 캐싱 가능
     - 서버 부하 감소: 컨텐츠가 캐싱 되기 때문에 서버가 동적으로 컨텐츠 생산할 필요 없음
     - SEO: 검색 엔진 크롤러가 찾기 더 쉬움 (사전 렌더링으로 페이지가 로드될 때 콘텐츠가 이미 사용 가능하기 때문)
   - 사용 예시:
     - 데이터가 자주 변경되지 않는 페이지 (e.g.: 블로그, 마케팅 페이지)
     - 속도가 중요한 경우 (CDN 캐싱 활용 가능)
     - SEO가 중요한 경우
     - 정기적으로 업데이트 되거나, 사용자별 데이터가 있는 경우에 적합히지 않음

2. 동적 렌더링

   - 데이터 제공 및 렌더링 시점: 사용자 요청시
   - 데이터 변경: 항상 최신 데이터 제공
   - 사용 예시
     - 데이터가 자주 변경되는 경우 (e.g.: 실시간 주식 차트, 최신 뉴스)
     - 사용자별 맞춤 데이터 (e.g.: 로그인한 사용자의 대시보드)
     - 요청마다 다른 데이터를 제공해야 하는 경우 (e.g. 검색 기능)
     - 요청 시간 정보: 쿠키나 URL 검색 매개변수 등 요청 시점에서만 알 수 있는 정보
   - 단점: 애플리케이션의 속도가 가장 느린 데이터 요청 속도에 따라 결정됨 (ch.8의 스트리밍으로 개선 가능)

### Ch.9 [Streaming](https://nextjs.org/learn/dashboard-app/streaming)

- 페이지를 한번에 렌더링 하는 것 대신, 'chunk' 단위로 나눈 후 각 chunk를 점진적으로 렌더링 하는 방식
- 느린 데이터 요청이 있을 때, 빠른 부분은 사용자에게 먼저 보여주고, 느린 부분은 준비되는 대로 추가적으로 렌더링
- 사용자는 더 빠르게 초기 컨텐츠를 볼 수 있음
- Next.js 에서 구현: 1. 페이지 수준에서 loading.tsx파일을 사용, 2. 컴포넌트 수준에서는 <Suspense> 사용

1. 페이지 스트리밍 (`loading.tsx`)

   - 구현 방법
     1. 폴더 하위에 `loading.tsx` 파일 생성 (e.g. `/app/dashboard/loading.tsx`)
        `loading.tsx` 파일에 loading skeletons 을 추가하면 사용자에게 로딩 중임을 표시할 수 있음 (loading skeletons: UI의 간소화된 버전)
     2. route groups 사용
        - 스트리밍이 dashboard 페이지에만 적용되고, 하위 페이지인 `/invoices/page.tsx` `/customers/page.tsx` 에 적용되지 않도록 대시 보드 폴더 안에 (overview) 폴더 생성 후 해당 폴더 내로 page.tsx, loading.tsx 파일 이동
        - 괄호를 사용하여 새 폴더를 만들면 URL 경로에 포함되지 않음
          `/dashboard/(overview)/page.tsx` === `/dashboard`

2. 컴포넌트 스트리밍

   - 구현 방법
     1. 컴포넌트를 <Suspense> 로 감싸서 사용
        렌더링을 느리게 하는 작업 (e.g. 데이터 요청)을 컴포넌트 내에서 하도록 함
        해당 컴포넌트를 <Suspense> 로 감쌈
        fallback 속성으로 로딩 화면 (e.g. skeleton) 전달
     2. 컴포넌트 그룹화: <Wrapper> 컴포넌트 생성
        여러개의 <Card> 가 있는 경우, 각 컴포넌트 마다 <Suspense>로 감싸는 것 보다, 여러개의 <Card> 컴포넌트를 감싸는 <CardWrapper> 컴포넌트 생성 후 해당 컴포넌트를 <Suspense>로 감싸는것이 더 나음

3. Suspense 경계를 어디에 위치하는 것이 좋을까?

   - 고려 사항
     - 페이지가 스트리밍될 때 사용자가 페이지를 어떻게 경험하길 원하는지
     - 어떤 콘텐츠를 우선시하고 싶은지
     - 컴포넌트가 데이터 패칭에 의존하는지
   - 하지만 정답은 없다

   ### Ch.10 [Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering)

   - 동일 경로에서 정적 및 동적 렌더링 결합
   - 아직 실험 단계 (Next.js 14)로, 프로덕션 모드에서는 사용 권장하지 않음
