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
const countCharacters = (strings, callback) => {
    let indexTotal = 0;
    strings.forEach(string => indexTotal += string.length);
    callback(indexTotal);
};
countCharacters(["hello", "world", "this", "is", "great"], result => {
  console.log(result);
});
