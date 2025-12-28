const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID(); 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function libraryLoop(){
  myLibrary.forEach(book => {
  console.log(`Title: ${book.title}`);
});
}

addBookToLibrary("el pepe", "ete sech", "69", "read");
addBookToLibrary("eso tilin", "car", "120", "not read");
addBookToLibrary("linkedin", "churro", "1454", "not read");

/*
document.getElementById("demo1").innerHTML =
"book name:" + element.title + "autor" + element.age + "."; 
*/

libraryLoop();