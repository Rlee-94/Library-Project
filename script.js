const btn = document.querySelector(".btn");
const booksContainer = document.querySelector(".books-container");

let booksLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  let elementTitle = document.createElement("p");
  let elementAuthor = document.createElement("p");
  let elementPages = document.createElement("p");

  let bookElement = document.createElement("div");

  let titleContent = document.createTextNode(`Title: ${book.title}`);
  let authorContent = document.createTextNode(`Author: ${book.author}`);
  let pageContent = document.createTextNode(`Pages: ${book.pages}`);

  elementTitle.appendChild(titleContent);
  elementAuthor.appendChild(authorContent);
  elementPages.appendChild(pageContent);

  bookElement.appendChild(elementTitle);
  bookElement.appendChild(elementAuthor);
  bookElement.appendChild(elementPages);

  booksContainer.appendChild(bookElement);

  booksLibrary.forEach((book) => {
    bookElement.classList.add("card");
  });
}

function submitForm(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  let book = new Book(title, author, pages);

  booksLibrary.push(book);

  addBookToLibrary(book);
}

btn.addEventListener("click", submitForm);
