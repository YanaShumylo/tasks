// ЗАДАЧІ
// Напиши функцію, яка створює об'єкт з ім'ям і віком. // Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// function createUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = createUser('Mark', 22);
// console.log(user);

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок). // Поверни оновлений об'єкт.
// function createUser(name, age, address) {
//     let user = {
//         name: name,
//         age: age,
//     };
//     user.address = address;  // Додаємо властивість "address"
//     return user;  // Повертаємо оновлений об'єкт
// }
// let user = createUser('Mark', 22, 'Sumy');
// console.log(user);

// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.
// function createUser(name, age) {
//     let user = {
//         name,
//         age,
//     }; user.age = age;  return user; }

// let user = createUser("Pavel", 45);
// console.log(user);

// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.
// function createUser(name, age) {
//     let user = { name, age, };
//         delete user.age; return user;
// }
// let user = createUser("Majkl", 9);
// console.log(user);

// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// function createUser(name, address) {
//     let user = { name, address, };
//     return user.name;
// }
// let user = createUser('Sonya', 'Azija'); console.log(user);

// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// function createUser(name, address) {
//     let user = { name, address, };
//     if ( 'address' in user) {
//         return true;
//     } else { return false; }
// }
// let user = createUser();
// console.log(user);

// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.
// function createUser(user1, user2) {
//         return { ...user1, ...user2 };
// }
// let user1 = { userName: 'Sonya', age: 25, work: 'Developer' };
// let user2 = { userName: 'Mark', age: 30, country: 'Ukraine' };
// let mergedUser = createUser(user1, user2);
// console.log(mergedUser);

// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.
// function createUser(name = 'Unknown', age = 0, address) {
//     let user = {
//         name ,
//         age ,
//         address ,
//     }; return user;
// }
// let user = createUser();
// console.log(user);

// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// function createUser(user, newName, newAge) {
//     user.name = newName;
//     user.age = newAge;
//     return user;
// }
// let user = {
//     name: 'Sonya',
//     age: 25
// };
// user = createUser(user, 'Polina', 33);
// console.log(user);

// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// function createUser(user, name, age, email) {
//     if (!user.email) {
//         user.email = email;
//     }
//     return user;
// }

//  let user = {
//     name: 'Alina',
//     age: 13,
// };

// user = createUser(user, 'Alina', 13, 'vhk@gmail.com');
// console.log(user);

// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.
// function createUser(user, age) {
//     user.age = age.toString(); return user;
// }
// let user = {
//     age: 88,
// };
// user = createUser(user, 76);
// console.log(user);

// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// function createUser(user,name, address) {
//     user.name = name;           
//     user.address = address;     
//     return user; 
// }
// let user = {
//     name: 'Nika',
//     address: 'Kuiv',
// };
// user = createUser(user, 'Yana','Lviv' );
// console.log(user);

// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// function createUser(user, name, city) {
//     user.name = name;           
//     user.city = city;     
//     return `User ${name} from ${city}!`
// };
// let user = {
//     name: 'Nika',
//     city: 'Kuiv',
// };
// user = createUser(user,'Yana', 'Lviv');
// console.log(user);

// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// function createObject(arr) {
//     let obj = {};  
//     for (let i = 0; i < arr.length; i++) {
//         let [key, value] = arr[i];  
//         obj[key] = value;           
//     }
//     return obj; 
// }
// let keyValuePairs = [["name", "John"], ["age", 25], ["address", "123 Street"]];
// let result = createObject(keyValuePairs);
// console.log(result);
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// function updateAge(arr) {
//         return arr.map(obj => {
//         obj.age += 1;  
//         return obj;    
//     });
// }

// let users = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Tom', age: 22 }
// ];
// let updatedUsers = updateAge(users);
// console.log(updatedUsers);