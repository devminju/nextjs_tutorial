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
