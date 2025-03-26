                                      // Масиви та методи рядкочків
// ; 1.	Напиши цикл, який виведе на консоль числа від 1 до 10.
//     for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// ; 2.	Напиши цикл, який виведе на консоль парні числа від 1 до 20.
// for (let i = 2; i <= 20; i+=2) {
//         console.log(i);
// }

// ; 3.	Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
//      console.log(sum);
//     }

// ; 4.	Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).
// for (let i = 0; i <= 10; i++) {
//     let sum = 7 * i;
//      console.log(sum);
//     }

// ; 5.	Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал числа 5: !5 = 1 * 2 * 3 * 4 * 5).
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));
//
// ; 6.	Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"
// const  str = "Hello Word";
// for (let i = 1; i <= str.length; i += 2) {
//        console.log(str[i]);
//            }

// ; 7.	Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку.
// Пояснення: let str = "Hello world"; — зберігаємо рядок у змінній str.
// for(let i = str.length - 1; i >= 0; i--) — цикл починається з останнього індексу(що дорівнює довжині рядка мінус 1) і поступово зменшується до 0.
// console.log(str[i]); — виводимо поточну літеру на консоль.

// let str = "Hello world";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// ; 8.	Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл.
// const  str = "Hello Word";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//         break;
//     }
//         console.log(str[i]);
// }

// ; 9.	Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".
// const  str = "JavaScript";
// for (let i = 1; i < str.length; i += 2) {
//     console.log(str[i]);
//        }
//
// ; 10.	Напиши функцію, яка приймає рядок та повертає перевернутий рядок
// Пояснення:
// str.split('') — метод split('') розбиває рядок на масив окремих символів.
// reverse() — метод reverse() перевертає масив.
//     join('') — метод join('') об'єднує елементи масиву назад у рядок без роздільників.

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("Hello world"));

// ; 11.	Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі
// Пояснення:
// for (let i = 0; i < str.length; i++) — перебираємо всі символи рядка.
// if (i % 2 !== 0) — перевіряємо, чи є індекс непарним (це означає, що це другий, четвертий, шостий символ тощо).
// str[i].toUpperCase() — якщо індекс непарний, перетворюємо символ на великий.
// result += str[i] — додаємо символ до результату (як є для парних індексів).

// function capitalizeEverySecondChar(str) {
//   let result = '';
//     for (let i = 0; i < str.length; i++) {
//     if (i % 2 !== 0) {
//       result += str[i].toUpperCase();  // кожен другий символ стає великим
//     } else {
//       result += str[i];  // залишаємо символ без змін
//     }
//   }
//     return result;
// }
// console.log(capitalizeEverySecondChar("hello world"));

// ; 12.	Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count.
// Пояснення:
// let result = str1; — спочатку зберігаємо значення str1 в змінній result.
// for (let i = 0; i < count; i++) — цикл виконується count разів. Кожного разу до result додається str2.
// result += str2; — додаємо str2 до кінця рядка result.
// return result; — після завершення циклу функція повертає отриманий результат.
// function getString(str1, str2, count) {
//   let result = str1;
//   for (let i = 0; i < count; i++) {
//     result += str2;
//   }
//   return result;

// }
                                           // ; Масиви
                                      // ; Прості задачі
// ; 1.	Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
// let arr = [1, 2, 3, 5, "you"];
// console.log(arr);

// ; 2.	Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
// function printEvenElements (arr)
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 === 0); {
//           console.log(arr[i]);
//      }
// }
// printEvenElements(["Hello", "people", "How", "are", "you"]);

// ; 3.	Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.
// function evenNumbers(number) {
//      for (let i = 0; i < number.length; i++) {
//           if (number[i] % 2 === 0);
//           {console.log(number[i]);}
//      }
// }
// evenNumbers([1, 2, 3, 4, 5, 6]);

// ; 4.	Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.
// function ElementsAll(arr, max) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             console.log(arr[i]);
//         }
//     }
// }

// let arr = [1, 5, 8, 3, 12, 7];
// let maxValue = 6;
// ElementsAll(arr, maxValue);

// ; 5.	Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
// function SumNum(numbers) {
//      let sum = 0;
//      for (let i = 0; i < numbers.length; i++) {
//           sum += numbers[i];
//      }
//           return sum;
//      }
// let result = SumNum([5, 1, 2]);
// console.log(result);

// ; 6.	Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.
// function lookElement(arr, element) {
//      let count = 0;
//      for (let i=0; i<arr.length; i++) {
//           if (arr[i] === element) {
//                count++;
//           }
//      console.log(count);
// }
// }
// lookElement([1, 2, 3, 2, 4, 2, 5], 2);

// ; 7.	Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.
// function removeNegativeNumbers(arr) {
//      // Фільтруємо масив, залишаючи тільки невід'ємні числа
//      let positiveNumbers = arr.filter(num => num >= 0);
    
//      // Перетворюємо масив у рядок через join(), а потім назад у масив
//      let result = positiveNumbers.join(',').split(',').map(Number);
    
//      return result;
// }
// let numbers = [-1, 2, -3, 4, 5, -6];
// let filteredNumbers = removeNegativeNumbers(numbers);
// console.log(filteredNumbers);

// ; 8.	Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.
// function arr(arrStrings) {
//      for (let index = 0; index < arrStrings.length; index++) {
//           if (arrStrings[index].length < 6) { arrStrings[index] = arrStrings[index].toLowerCase();};
//              {arrStrings[index] = arrStrings[index].toUpperCase();}
//      } return arrStrings;
// }
// let strings = ["apple", "banana", "cherry", "kiwi"];
// let result = arr(strings);
// console.log(result);

// ; 9.	Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.
// function arrNum(numbers) {
//      let oddNum = [];
//      for (let index = 0; index < numbers.length; index++) {
//           if (numbers[index] % 2 !== 0)
//           { oddNum.push(numbers[index]); }
//             }
//     return oddNum;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arrNum(numbers);
// console.log(result);

// ; 10.	Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.

// function arr(numbers)
// { let result = [];
//      for (let index = 0; index < numbers.length; index++) {
//           result.push(numbers[index] * index);
// }
//      return result;
// }
// let arrNumbers = [1, 2, 3, 4];
// let result = arr(arrNumbers);
// console.log(result);

// ; 11.	Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.
// function arr(numbers) {
//      let isNumberDivide = [];
//  for (let index = 0; index < numbers.length; index++) {
//       if (numbers[index] % 3 === 0) { isNumberDivide.push(numbers[index]) }
//      }
//      return isNumberDivide;
// }
// let arrNumbers = [1, 3, 5, 9, 12, 14, 15];
// let result = arr(arrNumbers);
// console.log(result);

// ; Середні задачі
// ; 1.	Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// function arr(arr1, arr2) {
//      let arrEvened = [];
//      for (let i = 0; i < arr1.length; i++) {
//           if (arr2.includes(arr1[i])) {
//                arrEvened.push(arr1[i]);
//           }
//      }
//           return arrEvened;
//      }
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// console.log(arr(arr1, arr2));

// ; 2.	Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.
// function arr(arr1, arr2) {
//      let arrEvened = [];
//      for (let i = 0; i < arr1.length; i++) {
//           if (!arr2.includes(arr1[i])) {
//                arrEvened.push(arr1[i]);
//           }
//      }
//           return arrEvened;
// }
//      let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// console.log(arr(arr1, arr2));

// ; 3.	Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// function arr(elements) {
//       let minElement = elements[0];
//      for (let index = 1; index < elements.length; index++) {
//           if (elements[index] < minElement) {  minElement = elements[index]; }
//      }
//      return  minElement;;
// }
// let arr1 = [5, 2, 8, 1, 4];
// console.log(arr(arr1));
// ; 4.	Напиши функцію яка приймає масив та знаходить максимальний елемент.
// function arr(elements) {
//      let maxElement = elements[0];
//      for (let index = 1; index < elements.length; index++) {
//           if (elements[index] > maxElement) { maxElement = elements[index]; }
//      }
//      return maxElement;
// }
// let arr1 = [5, 2, 8, 1, 4];
// console.log(arr(arr1));

// ; 5.	Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.
// function arrEvened(arr) {
//      let sum = 0;
//      for (let index = 0; index < arr.length; index++) {
//           if (sum += arr[index]) {
//                return sum / arr.length;
//           }
//      }
// }
// let arr1 = [5, 2, 8, 1, 4];
// console.log(arrEvened(arr1));

// ; 6.	Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.
// function arr(elements) {
//      let indexElement = [];
//      for (let index = 0; index < elements.length; index++) {
//         if (elements[index] > index) {
//             indexElement.push(elements[index]);
//         }
//     }
//  return indexElement;
// }
// let arr1 = [5, 2, 8, 1, 4];
// console.log(arr(arr1));

// ; 7.	Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.
// function removeMin(numbers) {
//       let minElement = Math.min(...numbers);
//        let minIndex = numbers.indexOf(minElement);
//        numbers.splice(minIndex, 1);
//         return numbers;
// }

// let arr1 = [5, 2, 8, 1, 4];
// console.log(removeMin(arr1)); 

// ; 8.	Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.
function filterNumbersWithoutFive(start, end) {
    let result = [];
        for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            result.push(i); 
        }
    }
    return result;
}

let start = 10;
let end = 100;
console.log(filterNumbersWithoutFive(start, end)); 

// ; Складні
// ; 1.	Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.
// ; 2.	Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.
// ; 3.	Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.
// ; 4.	Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.
// ; 5.	Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.
// ; 6.	Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.
// ; 7.	Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.
