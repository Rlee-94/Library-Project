let booksLibrary = [];

const btn = document.querySelector(".btn");
const elementul = document.getElementById("book-list");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let elementTitle = document.createElement("p");
  let elementAuthor = document.createElement("p");
  let elementPages = document.createElement("p");

  let bookElement = document.createElement("li");

  let titleContent = document.createTextNode("Title: " + book.title);
  let authorContent = document.createTextNode("Author: " + book.author);
  let pageContent = document.createTextNode("Pages: " + book.pages);

  elementTitle.appendChild(titleContent);
  elementAuthor.appendChild(authorContent);
  elementPages.appendChild(pageContent);

  bookElement.appendChild(elementTitle);
  bookElement.appendChild(elementAuthor);
  bookElement.appendChild(elementPages);

  elementUl.appendChild(bookElement);
}

function submitForm() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  let book = new Book(title, author, pages);

  booksLibrary.push(book);

  addBookToLibrary(book);
}

btn.addEventListener("click", submitForm);
console.log(booksLibrary);
