# Afnan Aljohani — Portfolio

Bilingual Arabic/English portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Live website

https://afnan-ai-portfolio.a-almass3dii.chatgpt.site

## أماكن التعديل

- النصوص والترجمة: `client/src/lib/content.ts`
- المشاريع والمعرض: `client/src/lib/projects.ts`
- الألوان والتنسيق: `client/src/index.css`
- أقسام الصفحة: `client/src/components/`
- ترتيب الأقسام: `client/src/pages/Home.tsx`

## التشغيل محليًا

Install Node.js and pnpm, then run:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL shown in the terminal. Stop with Ctrl+C.

```sh
pnpm check
pnpm build
```

GitHub stores the editable source. Updating files in GitHub does not automatically change the live website; publish a new version after the changes are ready.
