// 2026-yilgi Jahon chempionatining eng yodda qolarli gollari — haqiqiy o'yin natijalari asosida
// (football-data.org). Gol tafsilotlari (aniq daqiqa, epizod tavsifi) illyustrativ tarzda yozilgan.
export const goals = [
  {
    id: 1,
    teamId: 'esp',
    player: 'Lamine Yamal',
    minute: 82,
    match: { uz: 'Ispaniya 1-0 Argentina (Final)', ru: 'Испания 1-0 Аргентина (Финал)' },
    desc: {
      uz: "Final o'yinida 19 yoshli yulduzning dunyo chempioni unvonini keltirgan tarixiy g'alaba goli — Ispaniya 2026 Jahon chempioni bo'ldi.",
      ru: 'Исторический победный гол 19-летней звезды в финале принёс Испании титул чемпиона мира 2026 года.',
    },
    color: '#c60b1e',
  },
  {
    id: 2,
    teamId: 'arg',
    player: 'Lionel Messi',
    minute: 61,
    match: { uz: 'Argentina 3-1 Shveytsariya (Chorak final)', ru: 'Аргентина 3-1 Швейцария (Четвертьфинал)' },
    desc: {
      uz: "Messining turnirdagi so'nggi gollaridan biri — jarima maydoni ichida sovuqqonlik bilan yakunlangan aniq zarba.",
      ru: 'Один из последних голов Месси на турнире — хладнокровно реализованный удар в штрафной площади.',
    },
    color: '#75aadb',
  },
  {
    id: 3,
    teamId: 'eng',
    player: 'Jude Bellingham',
    minute: 76,
    match: { uz: 'Fransiya 4-6 Angliya (3-o\'rin uchun)', ru: 'Франция 4-6 Англия (Матч за 3-е место)' },
    desc: {
      uz: "10 golli dramatik o'yinda Angliyaning hal qiluvchi zarbalaridan biri — ikki tomon ham hujumda ayovsiz edi.",
      ru: 'Один из решающих ударов Англии в драматичном матче с 10 голами — обе команды атаковали без остановки.',
    },
    color: '#cf081f',
  },
  {
    id: 4,
    teamId: 'arg',
    player: 'Julian Alvarez',
    minute: 89,
    match: { uz: 'Angliya 1-2 Argentina (Yarim final)', ru: 'Англия 1-2 Аргентина (Полуфинал)' },
    desc: {
      uz: "O'yin oxirida urilgan dramatik g'alaba goli — Argentinani finalga olib chiqdi.",
      ru: 'Драматичный победный гол в концовке матча вывел Аргентину в финал.',
    },
    color: '#75aadb',
  },
  {
    id: 5,
    teamId: 'uzb',
    player: 'Eldor Shomurodov',
    minute: 84,
    match: { uz: "O'zbekiston 1-3 Kolumbiya", ru: 'Узбекистан 1-3 Колумбия' },
    desc: {
      uz: "O'zbekiston terma jamoasining Jahon chempionatlari tarixidagi birinchi goli — mamlakat futbol tarixiga oltin harflar bilan yozildi.",
      ru: 'Первый в истории гол сборной Узбекистана на чемпионатах мира — вписан золотыми буквами в историю футбола страны.',
    },
    color: '#0099cc',
  },
  {
    id: 6,
    teamId: 'eng',
    player: 'Harry Kane',
    minute: 90,
    match: { uz: 'Meksika 2-3 Angliya (1/8 final)', ru: 'Мексика 2-3 Англия (1/8 финала)' },
    desc: {
      uz: "Terma jamoa kapitanining qo'shimcha vaqtdagi hal qiluvchi zarbasi — Angliyani chorak finalga olib chiqdi.",
      ru: 'Решающий удар капитана сборной в добавленное время вывел Англию в четвертьфинал.',
    },
    color: '#cf081f',
  },
  {
    id: 7,
    teamId: 'bra',
    player: 'Vinicius Junior',
    minute: 70,
    match: { uz: 'Braziliya 2-1 Yaponiya (1/16 final)', ru: 'Бразилия 2-1 Япония (1/16 финала)' },
    desc: {
      uz: "Yaponiyaning qattiq qarshiligini yengib, Braziliyani keyingi bosqichga olib chiqqan texnikaviy gol.",
      ru: 'Технично исполненный гол, сломивший упорное сопротивление Японии и выведший Бразилию в следующий раунд.',
    },
    color: '#ffdf00',
  },
  {
    id: 8,
    teamId: 'can',
    player: 'Jonathan David',
    minute: 55,
    match: { uz: 'Kanada 6-0 Qatar', ru: 'Канада 6-0 Катар' },
    desc: {
      uz: "Mezbon Kanadaning guruh bosqichidagi eng katta g'alabasida terma jamoa gol urish mashinasining aniq zarbasi.",
      ru: 'Точный удар главного бомбардира сборной в крупнейшей победе хозяев турнира Канады на групповом этапе.',
    },
    color: '#ff0000',
  },
  {
    id: 9,
    teamId: 'esp',
    player: 'Dani Olmo',
    minute: 66,
    match: { uz: 'Ispaniya 2-1 Belgiya (Chorak final)', ru: 'Испания 2-1 Бельгия (Четвертьфинал)' },
    desc: {
      uz: "Bo'lajak chempion Ispaniyani yarim finalga olib chiqqan hal qiluvchi zarba.",
      ru: 'Решающий удар, выведший будущего чемпиона Испанию в полуфинал.',
    },
    color: '#ffc400',
  },
  {
    id: 10,
    teamId: 'ger',
    player: 'Jamal Musiala',
    minute: 39,
    match: { uz: 'Germaniya 7-1 Kyurasao', ru: 'Германия 7-1 Кюрасао' },
    desc: {
      uz: "Guruh bosqichidagi eng katta g'alabalardan birida Germaniyaning yosh yulduzi ajoyib texnika namoyish etdi.",
      ru: 'В одной из крупнейших побед группового этапа молодая звезда Германии продемонстрировала великолепную технику.',
    },
    color: '#dd0000',
  },
]
