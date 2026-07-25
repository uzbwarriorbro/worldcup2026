# Jahon Chempionati 2026 — Fan Sayt

FIFA Jahon chempionati 2026 (AQSH, Kanada, Meksika) haqida shaxsiy fan-sayt. PlayStation futbol o'yinlariga ilhomlangan dizayn, stadion animatsiyasi, jonli natijalar, jamoalar tarkibi, qiziqarli faktlar va eng chiroyli gollar ro'yxati. UZB/RU tillarida.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

## Jonli natijalar uchun API kaliti (ixtiyoriy)

Sayt [football-data.org](https://www.football-data.org/client/register) API'sidan real natijalarni olishga urinadi. Kalit sozlanmagan bo'lsa, sayt avtomatik ravishda **namunaviy (demo) ma'lumotlar**ni ko'rsatadi — bu sayt ishlashiga xalaqit bermaydi.

Real ma'lumotlarni yoqish uchun:

1. https://www.football-data.org/client/register saytida bepul ro'yxatdan o'ting.
2. Sizga elektron pochta orqali API kalit yuboriladi.
3. Loyiha ildizida `.env` faylini yarating (`.env.example` andozasi asosida):

   ```
   VITE_FOOTBALL_API_KEY=sizning_api_kalitingiz
   ```

4. Dev serverni qayta ishga tushiring (`npm run dev`).

**Eslatma:** football-data.org bepul tarifi so'rovlar sonini cheklaydi (daqiqasiga ~10 ta) va ba'zan Jahon chempionati 2026 kabi kelajakdagi turnirlar uchun to'liq jonli ma'lumotni taqdim etmasligi mumkin — bunday holatlarda sayt avtomatik demo rejimga o'tadi.

## Joylashtirish (Netlify)

Sayt https://worldcup2026-uzb-fan.netlify.app manzilida joylashtirilgan.

- `.env` fayldagi `VITE_FOOTBALL_API_KEY` faqat **lokal dev** rejimida (`npm run dev`) ishlatiladi va Vite proksi orqali to'g'ridan-to'g'ri football-data.org'ga yuboriladi.
- Production'da (Netlify) API kaliti **`netlify/functions/football-api.js`** server funksiyasi orqali ishlatiladi — kalit `FOOTBALL_API_KEY` nomli Netlify muhit o'zgaruvchisida saqlanadi (`netlify env:set FOOTBALL_API_KEY <kalit>`) va brauzer kodiga hech qachon chiqmaydi.
- Qayta joylashtirish uchun:

  ```bash
  npm run build
  npx netlify-cli deploy --prod --dir=dist --no-build
  ```

  **Muhim:** build qilishdan oldin `.env` faylni vaqtincha olib qo'ying (yoki uni build muhitida sozlamang) — aks holda `VITE_FOOTBALL_API_KEY` brauzer JS bundle'iga qo'shilib qoladi. Lokal `.env` faqat `npm run dev` uchun xavfsiz.

## Loyiha tuzilishi

- `src/pages` — sahifalar (Bosh sahifa, Natijalar, Jamoalar, Jamoa tafsilotlari, Faktlar, Gollar)
- `src/components` — qayta ishlatiladigan UI komponentlari
- `src/data` — jamoalar, o'yinchilar, faktlar, gollar va guruh ma'lumotlari
- `src/api` — football-data.org bilan integratsiya (klient tomoni)
- `netlify/functions/football-api.js` — production uchun server-tomon API proksi
- `src/hooks/useLiveData.js` — jonli natijalarni API/demo rejimida boshqaruvchi hook
- `src/i18n` — UZB/RU tarjimalari

## Build

```bash
npm run build
```
