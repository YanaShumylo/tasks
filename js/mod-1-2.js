// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2.Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.В іншому випадку функція повинна повернути булеве значення false.
// function str(str1, str2)
// {
//     if (str1[0] === str2[str2.length - 1]) {
//         return true;
//     }
//     else { return false };
//     }
// console.log(str("apple", "orange"));


// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// function str(str1, str2) {
//    return str1[0] === str2[0];
// }
// console.log(str("apple", "apricot"));


// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.
// function str(str1, str2) {
//     if (str1.toString().lenght  === str2.toString().lenght) { return true };
// }
// console.log(str ("son", "one"));


// Задача-4
// Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false.
// function isEvenDigitCount(num) {
//     // Перетворюємо число на рядок, щоб визначити кількість цифр
//     let numDigits = num.toString().length;
//         // Перевіряємо, чи кількість цифр парна
//     return numDigits % 2 === 0;
// }
// console.log(isEvenDigitCount(1234));

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.
// function num(num1, num2) {
//      return num1 > num2;
// }
//  console.log(num (5, 2));
    

// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false.
// function num(num1, num2) {
//     return num1 % num2 === 0;
// }
// console.log(num (10, 2));

// Задача-7
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false.
// function number(num) {
//     return num % 2 !== 0;
//     }
// console.log(number (3));
// Задача-8
// Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.
// function strName(str) {
//    return /[A-Z]/.test(str);
// }
// console.log(strName("son"));
// console.log(strName("sOn"));
// Використовуємо регулярний вираз /[A-Z]/, який шукає будь-яку велику літеру в рядку.
// Метод .test(str) перевіряє, чи є хоча б одна велика літера в рядку str.

// Підказка: допоможе toLowerCase();
// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false.
// function str(str1, str2) {
//    return str1.length > str2.length;
// }
//    console.log(str ("hello", "hello you"));
//    console.log(str ("hello", "hel"));

// Задача-12
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false.
// function containsSpace(str) {
//     if (str.indexOf(' ') !== -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Задача-14
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false.
// Пояснення:
// Очищення рядка: Ми використовуємо toLowerCase(), щоб зробити перевірку нечутливою до регістру, а також replace(/\s+/g, ''), щоб видалити всі пробіли (якщо їх можна ігнорувати в паліндромах).
// Реверс рядка: Для реверсування рядка використовуємо методи split(''), reverse() і join(''), щоб перетворити рядок на масив, перевернути його і знову зібрати у рядок.
// Порівняння: Якщо очищений рядок та його реверсоване значення однакові, то рядок є паліндромом, і ми повертаємо true. В іншому випадку — false.
// function isPalindrome(str) {
//        const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
//     const reversedStr = cleanedStr.split('').reverse().join('');
//         return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// Підказка: тут допоможе метод масиву reverse();

// Задача-15
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false.
// function num(num1, num2) {
//    return num1 <= num2;
// }
// console.log(num(1, 3));
// console.log(num(10, 3));

// Задача-17
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо перша літера str є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.

// function startsWithVowel(str)
// {
//         const firstChar = str.charAt(0).toLowerCase();
//     { return 'aeiou'.includes(firstChar); }
// }

//     console.log(startsWithVowel("apple"));
//     console.log(startsWithVowel("banana"));


// Задача-19
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 і num2 рівні. В іншому випадку функція повинна повернути булеве значення false.
// function num(num1, num2) {
//    return num1 === num2;
// }
// console.log(num(3, 3));
// console.log(num(10, 3));

// Задача-20
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше або дорівнює нулю. В іншому випадку функція повинна повернути булеве значення false.
// function number(num) {
//    return num >= 0;
// }
// console.log(number(5));
// console.log(number(-1));

// Задача-21
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо довжина str є парною. В іншому випадку функція повинна повернути булеве значення false.
// function isEven(str) {
//      return str.lenght % 2 === 0;
//  }
// console.log(isEven("apple"));   
// console.log(isEven("banana"));

// Задача-22
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на 2, а num2 не ділиться на 2. В іншому випадку функція повинна повернути булеве значення false.
// function number(num1, num2) {
//    return num1 % 2 == 0 && num2 % 2 != 0;
//    }
// console.log(number(10, 9));
// console.log(number(10, 4));

// Задача-23
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше 100, але менше 200. В іншому випадку функція повинна повернути булеве значення false.
// function number(num) {
//    return num > 100 && num < 200;
// }
// console.log(number(150));
// console.log(number(250));
   
// Задача-24
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить лише маленькі літери. В іншому випадку функція повинна повернути булеве значення false.

// Підказка: допоможе toLowerCase();

// Задача-25
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false.
// function str(str1, str2) {
//    if (str2.includes(str1)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(str("hello", "hello world"));
// console.log(str("world", "hello world"));
// console.log(str("bye", "hello world"));
// Задача-26
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є негативним числом. В іншому випадку функція повинна повернути булеве значення false.
// function number(num) {
//    return num < 0;
// }
// console.log(number(-5));
// console.log(number(5));
// Задача-27
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо різниця між num1 та num2 більше 50. В іншому випадку функція повинна повернути булеве значення false.
// function number(num1, num2) {
//   if (Math.abs(num1 - num2) > 50)
//    { return true };
//    else { return false };
//      }
// console.log(number(100, 40));
// console.log(number(60, 10));
// Задача-28
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є нуль. В іншому випадку функція повинна повернути булеве значення false.
// function zero(num) {
//    return num === 0;
//    }
// console.log(zero(2));
// console.log(zero(0));

// Задача-29
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
// function isLastLetterVowel(str1, str2) {
//       const lastChar = str1.charAt(str1.length - 1).toLowerCase();
//     if ('aeiou'.includes(lastChar)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLastLetterVowel("hello", ""));
// console.log(isLastLetterVowel("world", ""));

// Задача-30
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є кратним 10. В іншому випадку функція повинна повернути булеве значення false.
// function number(num) {
// if (num % 10 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(number(100));
// console.log(number(7));
// Task 1
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// Task 2
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// Task 3
// Напиши скрипт який переведе значення totalMinutes (кількість хвилин) рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// Task 4
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не дорівнює undefined або null. У в іншому випадку має надаватися значення defaultValue. Перевір роботу скрипта для сліпучих значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор "?" (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);