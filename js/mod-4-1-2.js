// ЗАДАЧІ №2
// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
const contactBook = {
    contacts: [],

    // Метод для додавання контакту
    addContact: function(contact) {
        this.contacts.push(contact);
    },

    // Метод для видалення контакту за ім'ям
    deleteContact: function(contactName) {
        const index = this.contacts.findIndex(contact => contact.name === contactName);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Контакт ${contactName} видалено.`);
        } else {
            console.log(`Контакт з іменем ${contactName} не знайдено.`);
        }
    },

    // Метод для пошуку контакту за ім'ям
    findContact: function(contactName) {
        const contact = this.contacts.find(contact => contact.name === contactName);
        if (contact) {
            return contact;
        } else {
            console.log(`Контакт з іменем ${contactName} не знайдений.`);
            return null;
        }
    }
};

// Приклад використання:
const contact1 = { name: "Іван", phone: "123-456-789" };
const contact2 = { name: "Марія", phone: "987-654-321" };

contactBook.addContact(contact1);
contactBook.addContact(contact2);

console.log(contactBook.contacts); // Виведе всі контакти

contactBook.deleteContact("Іван");
console.log(contactBook.contacts); // Виведе контакти без Івана

const foundContact = contactBook.findContact("Марія");
console.log(foundContact);

// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
let rectangle =
{
    width: 12, height: 6,
    area() {
        return this.width * this.height;
    },
    perimeter() {
        return 2 * (this.width + this.height);
    },
};

console.log(rectangle.area());
console.log(rectangle.perimeter());

// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
let toDoList = {
    tasks: [],
    
    addTask(task) {
        this.tasks.push({ name: task, done: false });
    },
   
    markAsDone(taskName) {
        let task = this.tasks.find(t => t.name === taskName);
        if (task) {
            task.done = true; 
        }
    },
        
    listTasks() {
        return this.tasks.map(task => `${task.name} - ${task.done ? "Виконано" : "Не виконано"}`).join('\n');
    }
};

toDoList.addTask("Купити хліб");
toDoList.addTask("Прочитати книгу");
console.log(toDoList.listTasks()); // Виводимо список задач
toDoList.markAsDone("Купити хліб");
console.log(toDoList.listTasks()); // Виводимо оновлений список задач

// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
let bankAccount = {
    balance: 0, 

    deposit(amount) {
        if (amount <= 0) {
            console.log("Сума депозита повинна бути більшою за нуль.");
            return;
        }
        this.balance += amount;
        console.log(`Внесено ${amount} на рахунок. Поточний баланс: ${this.balance}`);
    },

       withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума зняття повинна бути більшою за нуль.");
            return;
        }
        if (this.balance < amount) {
            console.log("Недостатньо коштів для зняття.");
            return;
        }
        this.balance -= amount;
        console.log(`Знято ${amount} з рахунку. Поточний баланс: ${this.balance}`);
    },

    checkBalance() {
        console.log(`Поточний баланс: ${this.balance}`);
        return this.balance;
    }
};

bankAccount.deposit(1000); // Внесено 1000 на рахунок.
bankAccount.withdraw(500); // Знято 500 з рахунку.
bankAccount.checkBalance(); // Поточний баланс: 500
bankAccount.withdraw(600); // Недостатньо коштів для зняття.

// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
let libraryCatalog = {
    books: [], 
    
  
    addBook(title, author, isbn) {
        const newBook = {
            title: title,
            author: author,
            isbn: isbn
        };
        this.books.push(newBook);
        console.log(`Книга "${title}" була додана в бібліотеку.`);
    },

      searchByAuthor(author) {
        const foundBooks = this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
        if (foundBooks.length > 0) {
            console.log(`Книги автора "${author}":`);
            foundBooks.forEach(book => console.log(`- ${book.title} (ISBN: ${book.isbn})`));
        } else {
            console.log(`Не знайдено книг автора "${author}".`);
        }
    },

    searchByISBN(isbn) {
        const foundBook = this.books.find(book => book.isbn === isbn);
        if (foundBook) {
            console.log(`Книга з ISBN ${isbn}: "${foundBook.title}" автора ${foundBook.author}`);
        } else {
            console.log(`Не знайдено книгу з ISBN ${isbn}.`);
        }
    },

       listAllBooks() {
        if (this.books.length > 0) {
            console.log("Список всіх книг у бібліотеці:");
            this.books.forEach(book => console.log(`- ${book.title} автора ${book.author} (ISBN: ${book.isbn})`));
        } else {
            console.log("У бібліотеці немає книг.");
        }
    }
};

libraryCatalog.addBook("1984", "Джордж Орвелл", "978-0451524935");
libraryCatalog.addBook("Вбивство в Східному експресі", "Агата Крісті", "978-0062693662");
libraryCatalog.addBook("Тваринна ферма", "Джордж Орвелл", "978-0451526342");
libraryCatalog.listAllBooks(); // Вивести всі книги
libraryCatalog.searchByAuthor("Джордж Орвелл"); // Пошук за автором
libraryCatalog.searchByISBN("978-0062693662"); // Пошук за ISBN

// Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.
// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
