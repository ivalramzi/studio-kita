# studio-kita

Proyek ini dikonversi dari situs HTML statis ke **Next.js 16** (App Router + TypeScript) oleh Depup.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Butuh Node.js 20.9 atau lebih baru.

## Halaman

- `index.html` → `/` (`app/page.tsx`)

## Yang perlu diketahui

- Aset (gambar, font, CSS, JS) ada di `public/` dengan path yang sama seperti situs lama, jadi URL lama tetap valid.
- Situs ini tidak memakai skrip sendiri, jadi tidak ada `PageScripts`.
- `next.config.mjs` memuat `typescript.ignoreBuildErrors` supaya build tidak berhenti di tipe atribut HTML lama. Hapus setelah `npx tsc --noEmit` bersih.
- Untuk gambar Open Graph dengan path relatif, isi `metadataBase` di `app/layout.tsx` (mis. `metadataBase: new URL("https://domainmu.com")`).
- Tautan antarhalaman memakai `<Link>` dari `next/link`; tautan ke luar tetap `<a>`.
