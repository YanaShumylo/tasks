let userName="Yana";

console.log(userName);

let age = 37;
console.log(`Мені ${age} років`);

let x = 30;
let y = 5;
console.log(`Додавання: ${x + y}`);
console.log(`Віднімання: ${x - y}`);
console.log(`Множення: ${x * y}`);
console.log(`Ділення: ${x / y}`);

let city="Sumy";
console.log(`Я живу в місті ${city}`);

const email= "example@domain.com";
let username = email.split('@')[0];
let domain = email.split('@')[1];
console.log(`Ім'я: ${username}`);
console.log(`Домен: ${domain}`);


const price = 500;
console.log(`Ціна: ${price} грн.`);

let isLogged = true;  
if (isLogged) {
    console.log("Користувач авторизований");
} else {
    console.log("Користувач неавторизований");
}

let firstName="Yana";
let lastName="Shumylo";
let fullName = firstName + " " + lastName;
console.log(fullName);


// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

let a = 2;
let b = 4;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

let radius = 7;
let area = 3.14 * radius * radius;
console.log(area);

// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.

// let someString = "Hello son";
// let length = someString.length;
// console.log(length);

// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

let someString = "This is ok!";
let firstLetter = someString[0];
let lastLetter = someString[someString.length - 1];
console.log(firstLetter, lastLetter);


// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
let str1 = "YES";
let str2 = "NO";
let str1Length = str1[str1.length - 1];
let str2Length = str2[str2.length - 1];
let str3 = str1Length + str2Length;
console.log(str3);

// Створи змінну userValue та запиши до неї будь-яке число.
// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).
// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;
let userValue = 44;
let lengthValue = userValue.toString().length;
let calculation = userValue * 5 * lengthValue;
console.log(calculation);
 
// Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff);

// Замінити вираз перевизначення комбінованим оператором `+=`.
let students = 100;
students += 50;
console.log(students);


// Розбери пріоритет операторів в інструкції визначення значення змінної
// `result`.
// множення 2 на 5, потім 108 + 223 відняти 10 (2 помножено на 5) вийде 321
const result = 108 + 223 - 2 * 5;
console.log(result);

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const bots = repairBots + defenceBots;
const message = `${companyName} has ${bots} in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

