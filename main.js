'use strict';

/* Задание 1 */
let name = 'Джон';
let admin = name;
alert(admin); 

/* Задание 2 */
let name_city = prompt('Название города: ');
let year_city = prompt('Год образования города: ');
let nacel_city = prompt('Количество населения города: ');

const age_city = 2025 - year_city;
let isTrue = confirm(`Городу ${name_city} исполнилось ${age_city} лет с момента его образования. Население - ${nacel_city} человек `);

/* Задание 3 */
const R = prompt('Напишите радиус: ');
let isS = confirm(`Площадь круга  ${Math.PI * R**2}`);

/* Задание 4 */

let a = Number(prompt('Введите 1 число'));
let b = Number(prompt('Введите 2 число'));
console.log('Сумма:', a+b);
console.log('Разность:', a-b);
console.log('Частное:', a/b);
console.log('Произведение:', a*b);