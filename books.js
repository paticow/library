function books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.read}`);
}

let theHobbit = new books("The hobbit", "J.R.R. Tolkien", "295", "not read"); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


