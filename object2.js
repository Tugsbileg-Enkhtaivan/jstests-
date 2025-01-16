const date = new Date("2025-12-31");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[date.getDay()];

// console.log(day);

let Year = [];
for (
  let d = new Date("2025-12-31");
  d <= new Date("2030-12-31");
  d.setDate(d.getDate + 1)
) {
  console.log(d);
}

// for (let i = 2025; i <= 2030; i++) {
//   const current = new Date("2025-12-31").getDay();
//   console.log(current);
// }

// const days = {
//     '0': 'Ням гараг',
//     '1': 'Даваа гараг',
//     '2': 'Мягмар гараг',
//     '3': 'Лхагва гараг',
//     '4': 'Пүрэв гараг',
//     '5': 'Баасан гараг',
//     '6': 'Бямба гараг',
// }

// console.log()
