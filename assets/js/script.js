class Book {
  constructor() {
    this.bookArray = Object.entries(window.localStorage);
    this.html = [];
  }

  addBooks() {
    this.id = document.getElementById('name-book').value.concat(document.getElementById('author-book').value);
    this.bookName = document.getElementById('name-book').value;
    this.bookAuthor = document.getElementById('author-book').value;
    localStorage.setItem(this.id, [this.bookName, this.bookAuthor]);
  }

  display() {
    this.bookArray.forEach(([key, value]) => {
      const array = value.split(',');
      this.html.push(`<div class='book'><div class='text-container'><p class='book-title '>${array[0]} by</p><p class='book-author'>&nbsp;${array[1]}</p></div><button class='remove offset-md-1' onclick="book.removeBooks('${key}')">Remove</button></div>`);
    });
    document.getElementById('book-list').innerHTML = this.html.join(' ');
  }

  removeBooks(i) {
    localStorage.removeItem(i);
    this.bookArray = Object.entries(window.localStorage);
    window.location.reload();
  }
}

const book = new Book();
book.display();