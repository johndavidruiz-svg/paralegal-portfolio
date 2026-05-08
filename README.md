# Paralegal Portfolio

Static portfolio site demonstrating 28 paralegal task types through 28 fictional California-jurisdiction artifacts across 6 fictional cases.

**Live:** https://paralegal-portfolio.pages.dev

**Stack:** Astro 4 · MDX · Tailwind CSS · TypeScript · Cloudflare Pages

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Test

```bash
npm test         # vitest (helpers only)
npm run check    # astro check (TS + schema validation)
```

## Content

All cases, parties, courts, and documents on this site are **fictional**.
Content is authored as MDX in `src/content/{cases,artifacts,tasks}` and
validated against Zod schemas in `src/content/config.ts`.

## Spec & plan

- Spec: `docs/superpowers/specs/2026-05-08-paralegal-portfolio-design.md`
- Plan: `docs/superpowers/plans/2026-05-08-paralegal-portfolio.md`

## License

Content © Top Virtual PH. Code MIT.
