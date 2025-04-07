const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];

// Books
// Знайти всі книги жанру 'Fantasy'.
// const genreFantasy = books.filter(book => book.genre === 'Fantasy');
// console.log(genreFantasy);

// // Знайти всі книги, видані після 2000 року.
// const bookYear = books.filter(book => book.year > 2000);
// console.log(bookYear);

// // Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.
// const bookAuthor = books.filter(book => book.author === 'Fyodor Dostoevsky');
// console.log(bookAuthor);

// // Знайти всі книги з ціною меншою ніж 10 доларів.
// const bookPrice = books.filter(book => book.price < 10);
// console.log(bookPrice);

// // Знайти всі книги з рейтингом 4.8 і вище.
// const bookRating = books.filter(book => book.rating >= 4.8);
// console.log(bookRating);

// // Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.
// const bookRomancePrice = books.filter(book => {
//   const bookRomance = book.genre === 'Romance';
//   const bookPrice1 = book.price < 8;
//   return bookRomance && bookPrice1;
// });
// console.log(bookRomancePrice);

// // Знайти всі книги, видані до 1900 року.
// const bookYear1 = books.filter(book => book.year < 1900);
// console.log(bookYear1);

// // Знайти всі книги, що містять слово 'and' у назві.
// const bookTitle = books.filter(book => book.title = 'and');
// console.log(bookTitle);

// // Знайти всі книги, автором яких є 'J.R.R. Tolkien'.
// const bookAuthor1 = books.filter(book => book.author === 'J.R.R. Tolkien');
// console.log(bookAuthor1);

// // Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.
// const bookRatingGenre = books.filter(book => {
//   const genreHis = book.genre === 'Historical';
//   const ratingFour = book.rating > 4.7;
//   return genreHis && ratingFour;
// }
// );
// console.log(bookRatingGenre);
// // _________________________________________________
// // Знайти першу книгу жанру 'Fantasy'.
// const bookGenre = books.find(book => book.genre === 'Fantasy');
// console.log(bookGenre);

// // Знайти першу книгу, видану після 2000 року.
// const bookYear = books.find(book => book.year > 2000);
// console.log(bookYear);

// // Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.
// const bookAuthor = books.find(book => book.author === 'Fyodor Dostoevsky');
// console.log(bookAuthor);

// // Знайти першу книгу з ціною меншою ніж 10 доларів.
// const bookPrice = books.find(book => book.price < 10);
// console.log(bookPrice);

// // Знайти першу книгу з рейтингом 4.8 і вище.
// const bookRating = books.find(book => book.rating >= 4.8);
// console.log(bookRating);

// // Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.
// const bookRomancePrice = books.find(book => {
//   const bookRomance = book.genre === 'Romance';
//   const bookPrice1 = book.price < 8;
//   return bookRomance && bookPrice1;
// }
// );
// console.log(bookRomancePrice);

// Знайти першу книгу, видану до 1900 року.
// const bookYear1 = books.find(book => book.year < 1900);
// console.log(bookYear1);

// // Знайти першу книгу, що містить слово 'and' у назві.
// const bookFierstAnd = books.find(book => book.title = 'and');
// console.log(bookFierstAnd);

// // Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// const bookAuthor1 = books.find(book => book.author === 'J.R.R. Tolkien');
// console.log(bookAuthor1);

// // Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.
// const bookHisRating = books.find(book => {
//   const bookHis = book.genre === 'Historical';
//   const bookRating = book.rating > 4.7;
//   return bookHis && bookRating;
// }
// );
// console.log(bookHisRating);
// // _________________________________________________
// Чи є в масиві хоча б одна книга жанру 'Fantasy'?
// const bookGenre = books.some(book => book.genre === 'Fantasy');
// console.log(bookGenre);

// Чи є в масиві хоча б одна книга, видана після 2000 року?
// Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?
// Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?
// Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?
// Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?
// Чи є в масиві хоча б одна книга, видана до 1900 року?
// Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?
// Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?
//     Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7 ?

//         // _________________________________________________
// Чи всі книги в масиві мають рейтинг 4.5 і вище?
// const bookRating = books.every(book => book.rating >= 4.5);
// console.log(bookRating);

// Чи всі книги в масиві коштують менше 20 доларів?
// Чи всі книги в масиві видані після 1950 року?
// Чи всі книги в масиві є жанру 'Fiction'?
// Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?
// Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// Чи всі книги в масиві видані до 2000 року?
// Чи всі книги в масиві мають слово 'the' у назві?
// Чи всі книги в масиві мають рейтинг вище 4.0?
// Чи всі книги в масиві є жанру 'Adventure'?
//         // _________________________________________________
// Отримати масив назв всіх книжок.
// const bookTitle = books.map(book => book.title);
// console.log(bookTitle);

// // Отримати масив авторів всіх книжок.
// const bookAuthor = books.map(book => book.author);
// console.log(bookAuthor);

// // Створити масив об'єктів, які містять лише назву та автора кожної книжки.
// const bookAutTitle = books.map(book => { return `Athor: ${book.author}  Title: ${book.title}`; });
// console.log(bookAutTitle);

// // Створити масив цін всіх книжок з подвоєною вартістю.
// const bookPrice = books.map(book => book.price * 2);
// console.log(bookPrice);

// // Створити масив років видання всіх книжок з доданими 5 роками до кожного.
// const bookYear = books.map(book => book.year + 5);
// console.log(bookYear);

// Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).
// const bookTitRat = books.map(book => {
//   const bookRat = book.rating * 10;
//   return `title: ${book.title} rating: ${bookRat}%`;
// });
// console.log(bookTitRat);

// Створити масив об'єктів, де назва книжки буде в верхньому регістрі.
// const bookTitle = books.map(book => book.title.toUpperCase());
// console.log(bookTitle);

// Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".
// const bookTitleAuthor = books.map(book => { return `${book.title} - ${book.author}`; });
// console.log(bookTitleAuthor);

// Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.
// const bookDiscount = books.map(book => ({
//   ...book, discountPrice: book.price * 0.9
//   }));
// console.log(bookDiscount);

// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.
// const bookPodatok = books.map(book => {
//   const pricePodatok = book.price * 1.15;
//   return `${book.title}: ${pricePodatok}`;
// }
// );
// console.log(bookPodatok);

// Створити масив назв книжок, які видані після 2000 року.
// const bookTitle = books.map(book => book.year > 2000);
// console.log(bookTitle);

// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.
// const bookIsClassic = books.map(book => ({...book,
//   isClasic: book.year < 1950 }));
//   console.log(bookIsClassic);
  
// Отримати масив жанрів всіх книжок у верхньому регістрі.
// const bookGenre = books.map(book => book.genre.toUpperCase());
// console.log(bookGenre);

// Створити масив назв книжок, де всі слова в назві починаються з великої літери.
// const bookTitle = books.map(book => {
//   return {
//     title: book.title
//       .split(' ') // Розбиваємо назву на окремі слова
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Робимо першу літеру великою
//       .join(' ') // З'єднуємо слова назад у рядок
//   };
// });
// console.log(bookTitle);

// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
// const bookAuthorYear = books.map(book => { return `${ book.author }: ${ book.year}` });
// console.log(bookAuthorYear);

// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).
// const bookConvertorPrice = books.map(book => book.price * 0.85);
// console.log(bookConvertorPrice);

// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
// const bookNewTitle = books.map(book => { return `${ book.title } (Special Edition)`; } );
// console.log(bookNewTitle);

// Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.
// const bookTitle = books.map(book => {
//   return {
//     ...book,
//     shortTitle: book.title.split(' ')[0] // Беремо тільки перше слово
//   };
// });
// console.log(bookTitle);

// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".
// const bookDesc = books.map(book => {
//   return {
//     ...book,
//     description: `Ця книга від автора ${book.author} була видана у ${book.year} році`
//   };
// }
// );
// console.log(bookDesc);

// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.
// const bookGenreTitle = books.map(book => {
//   return {
//     title: book.title,
//     genre: book.genre.toLowerCase() // Перетворюємо жанр на нижній регістр
//   };
// });
// console.log(bookGenreTitle);

//         // _________________________________________________
// // Відсортувати книги за роком видання від найдавнішого до найновішого.
// const bookSortedYear = books.toSorted((a, b) => a.year - b.year);
// console.log(bookSortedYear);

// // Відсортувати книги за ціною від найнижчої до найвищої.
// const bookSortedPrice = books.toSorted((a, b) => a.price - b.price);
// console.log(bookSortedPrice);

// // Відсортувати книги за рейтингом від найнижчого до найвищого.
// const bookSortedRating = books.toSorted((a, b) => a.rating - b.rating);
// console.log(bookSortedRating);

// // Відсортувати книги за назвою у алфавітному порядку (від А до Я).
// const bookSortedTitle = books.toSorted((a, b) => a.title.localeCompare(b.title));
// console.log(bookSortedTitle);
 
// // Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).
// const bookSortedTitle1 = books.toSorted((a, b) => b.title.localeCompare(a.title));
// console.log(bookSortedTitle1);
 
// // Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.
// const bookSortedTitleGenre = books.toSorted((a, b) => {
//   if (a.genre !== b.genre){
//     return a.genre.localeCompare(b.genre);
// }
//   return b.title.localeCompare(a.title);
// });
// console.log(bookSortedTitleGenre);

// // Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.
// const bookSortedTitleAuthor = books.toSorted((a, b) => {
//   if (a.title !== b.title) {
//     return a.title.localeCompare(b.title);
//   }
//   return b.author.localeCompare(b.author);
// });
// console.log(bookSortedTitleAuthor);

// // Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.
// const SortedPrice1 = books.toSorted((a, b) => {
//   if (a.price < 10 && b.price >= 10) {
//     return -1; // a має бути перед b
//   }
//   if (a.price >= 10 && b.price < 10) {
//     return 1; // b має бути перед a
//   }
//   // Якщо обидві ціни однакові за категорією (<10 або >=10), сортуємо за ціною
//   return a.price - b.price;
// });
//  console.log(SortedPrice1);

// // Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.
// const bookRating1 = books.toSorted((a, b) => {
//   if (a.rating >= 4.8 && b.rating < 4.8) { return -1; }
//   if (a.rating < 4.8 && b.rating >= 4.8) { return 1; }
//   return b.rating - a.rating;
// });
// console.log(bookRating1);

// // Відсортувати книги спочатку за жанром, а потім за роком видання.
// const bookSortedGenreYear = books.toSorted((a, b) => {
// const genreComparison = a.genre.localeCompare(b.genre);
//   if (genreComparison !== 0) {
//     return genreComparison; // Якщо жанри різні, повертаємо результат порівняння
//   }
//   // Якщо жанри однакові, сортуємо за роком видання
//   return a.year - b.year;
// });
// console.log(bookSortedGenreYear);


//         // _________________________________________________
// Отримати всі книги, видані після 1090 року та відсортувати їх за рейтингом від найвищого до найнижчого, повернути лише назви.
const bookIsSortedYear = books
  .filter(book => book.year > 1090)
  .toSorted((a, b) => b.rating - a.rating)
  .map(book => book.title);
console.log(bookIsSortedYear);

// Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за роком видання від найдавнішого до найновішого та вивести перші 5 книг.
const bookIsSortedAuthor = books
  .filter(book => book.author === 'Fyodor Dostoevsky')
  .toSorted((a, b) => a.year - b.year)
  .slice(0, 5);
  console.log(bookIsSortedAuthor);
  
// Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.
const bookIsSortedPrice = books
  .filter(book => book.price < 10)
  .toSorted((a, b) => a.price - b.price)
  .map(book => book.title);
  console.table(bookIsSortedPrice);
  
// Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку та вивести авторів унікальних книг.
const bookIsSortedRating = books
  .filter(book => book.rating >= 4.8)
  .toSorted((a, b) => b.author.localeCompare(a.author))
  .map(book => book.author)
  .filter((value, index, self) => self.indexOf(value) === index);  // Видаляємо дублікати
  console.log(bookIsSortedRating);
  
// Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати їх за рейтингом від найвищого до найнижчого.
const bookIsSortedRomance = books
  .filter(book => book.genre === 'Romance')
  .filter(book => book.price < 8)
  .toSorted((a, b) => b.rating - a.rating);
  console.log(bookIsSortedRomance);
  
// Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до найнижчого та вивести першу книгу.
const isYear = books
  .filter(book => book.year < 1900)
  .toSorted((a, b) => b.rating - a.rating)
  .slice(0, 1);
  console.log(isYear);
  
// Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останню книгу.
const isTitleAnd = books
  .filter(book => book.title.includes('and'))
  .toSorted((a, b) => a.year - b.year)
  .slice(-1);
console.log(isTitleAnd);
// Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до найнижчого та вивести середній рейтинг.
const isAuthorTolkien = books
  .filter(book => book.author === 'J.R.R. Tolkien')
  .toSorted((a, b) => b.rating - a.rating)
const sumRating = isAuthorTolkien.reduce((sum, book) => sum + book.rating, 0) / isAuthorTolkien.length;
console.log(isAuthorTolkien);
console.log(sumRating);

// Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останні 3 книги.
const isGenreHistorical = books
  .filter(book => book.genre === 'Historical')
  .filter(book => book.rating > 4.7)
  .toSorted((a, b) => a.year - b.year)
  .slice(-3);
  console.log(isGenreHistorical);
  
//                 // _________________________________________________ 

                        // _________________________________________________ 
