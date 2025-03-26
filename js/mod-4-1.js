// Обєкти
// ОСНОВИ
// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.
let person = [
    { userName: "Yana" },
    { age: 37 },
    { profession: "IT" },
];

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.
console.log(person);
// Зміна властивостей: Змініть вік в об'єкті person на нове значення.
person.age = 19;
// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.
person.placeOfWork ="Company Ukraine";
// Видалення властивостей: Видаліть властивість професія з об'єкта person.
delete person.placeOfWork;
// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.
if ("placeOfWork" in person)
{ console.log("Yes") };
{ console.log("No") };
// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.
let friend = [
{ userName: "Andrii" },
    { age: 40 },
    { profession: "soldier" },
    { placeOfWork: "Armed" },
]
let mergedPerson = { ...person, ...friend };
console.log(mergedPerson);
// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.
let keys = Object.keys(person);
let value = [];
for (const key of keys) {
    console.log(key);
    console.log(person[key]);
}
{ value.push(person[keys]); }

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.
let person1 = {
    userName: "Yana",
    age: 37 ,
     profession: "IT",

greet() {
    console.log(`Hello, ${this.userName}!`);
    }
};
person1.greet();
// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().
let person2 = {
    userName: "Yana",
    age: 37,
    profession: "IT",
};
const keys1 = Object.keys(person2);
for (let key of keys1) {
  console.log(key);        
  console.log(person2[key]); 
}


