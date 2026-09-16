# Afnan Aljohani — Portfolio

Bilingual Arabic/English portfolio exported from Manus. Built with React, TypeScript, Vite and Tailwind CSS.

## أماكن التعديل

- النصوص والترجمة: `client/src/lib/content.ts`
- المشاريع والمعرض: `client/src/lib/projects.ts`
- الألوان والتنسيق: `client/src/index.css`
- أقسام الصفحة: `client/src/components/`
- ترتيب الأقسام: `client/src/pages/Home.tsx`

## التشغيل على جهازك

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

## Important migration note

The source was imported from the Manus export. Images referenced through `/manus-storage/` are not included in the ZIP and need to be recovered into `client/public/` for fully independent hosting. The Vite configuration also still includes Manus-specific development plugins. No API secrets were included.

GitHub stores the source code; a public website URL requires a separate deployment step.
