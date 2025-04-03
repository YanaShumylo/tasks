// Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму чисел у масиві та передати результат у колбек.
// const sumArray = (numbers, callback) => {
//     let sum = 0;
//     numbers.forEach(number => { sum += number },)
//     callback(sum);
// };
// sumArray([5, 10, 5],(result) => {
//   console.log(result)});

// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.
// const doubleArray = (numbers, callback) => {
// const doubledNumbers = numbers.map(number => number * 2);
//     callback(doubledNumbers);
// };
// doubleArray([1, 2, 4], result => { console.log(result) });

// Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.
// const filterWords = (words, condition, callback) => {
//     const valuesWord = words.filter(word => condition(word));
//     callback(valuesWord);
// };
// valuesWord(['Hello', 'Sorry', 'World'], word => word === 'Sorry', result => {
//     console.log(result);
// });

// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.
// const capitalizeStrings = (strings, callback) => {
//     const capitalizedStrings = strings.map(string => string.charAt(0).toUpperCase() + string.slice(1));
//     callback(capitalizedStrings);
// };
// capitalizeStrings(
//   ['hello', 'world', 'javascript'],
//     result => { console.log(result); });
  
// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.
// const ortNumbers = (numbers, callback) => {
//     const scoresNum = numbers.toSorted((a, b) => a - b);
//     callback(scoresNum);
// };
// ortNumbers([3, 1, 8, 7], result => {
//     console.log(result);});

// Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.
// const findMax = (numbers, callback) => {
//     const numMax = Math.max(...numbers);
//     callback(numMax);
// };
// findMax([230, 890, 567], result => {
//     console.log(result);
// });

// Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.
// const checkEven = (numbers, callback) => {
//     const parseNumbers = numbers.every(number => number % 2 === 0);
//     callback(parseNumbers);
// };
// checkEven([54, 8, 10], result => {
//     console.log(result);
// });
// checkEven([54, 8, 11], result => {
//     console.log(result);
// });

// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.
// const concatStrings = (strings, separator, callback) => {
//     const newString = strings.join(separator);
//     callback(newString);
// };
// concatStrings(["hello", "cat"], "/", result => {
//     console.log(result);
// });

// Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.
// const parseNumbers = (strings, callback) => {
//     const isNum = strings.map(string => parseInt(string));
//     callback(isNum);
// };
// parseNumbers(["7", "8"], result => {
//     console.log(result);
// });

// Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.
// const countCharacters = (strings, callback) => {
//     let indexTotal = 0;
//     strings.forEach(string => indexTotal += string.length);
//     callback(indexTotal);
// };
// countCharacters(["hello", "world", "this", "is", "great"], result => {
//   console.log(result);
// });

// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// const createProduct = (obj, callback) => {
//   const product = {
//     id: Date.now(), ...obj
//   };
//   callback(product);
// };
// const logProduct = (product) => {
//   console.log("Товар вироблено:", product);
// };
// const logTotalPrice = (product) => {
//   const totalPrice = product.price * product.quantity;
//   console.log(`Загальна вартість товару ${product.name}: ${totalPrice}₽`);
// };
// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.
// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.
// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.
// const TRANSACTION_LIMIT = 1000;
// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError("Недостатньо коштів!");
//     } else {
//       this.balance -= amount;
//       onSuccess(`Ви успісшно зняли ${amount}₽. Ваш новий баланс: ${this.balance}₽.`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       onError("Недостатньо коштівю Сума повинна бути більше нуля!");
//     } { this.balance += amount; onSuccess(`Ви успісшно зняли ${amount}₽. Ваш новий баланс: ${this.balance}₽.`); }
//   }
// };
// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.
// const each = (array, callback) => {
//   let result = [];
//   result = array.map(callback);
//   return result;
// };
  
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }
// function logProduct(product) {
//   console.log(product);
// }
// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
//   };
// const logProduct = (product) => {
//   console.log(product);
// };
// const logTotalPrice = product => {console.log (product.price * product.quantity);};
// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// Example 5 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.
// const TRANSACTION_LIMIT = 1000;
// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT || amount > account.balance) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else {
//       account.balance -= amount;
//       onSuccess(`Account balance: ${account.balance}`);
//     }
//   },
//     deposit:(amount, onSuccess, onError) => {
//       if (amount > TRANSACTION_LIMIT || amount <= 0) {
//         onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       } else {account.balance += amount;
//       onSuccess(`Account balance: ${account.balance}`);
//     }
//     }
//   };
  // function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }
//

// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.
// const logItems = items => {
//   console.log(items);
//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   nameList.forEach((name, index) => {
//     console.log(`${name}: ${phoneList[index]}`);
// });
// };
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calсulateAverage = (...args) => {
//   let total = 0;
//   args.forEach(arg => total += arg);
//   return total / args.length;
// };
// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2