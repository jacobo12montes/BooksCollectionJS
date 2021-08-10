let bookArray = [];
const html = [];
const myStorage = window.localStorage;
bookArray = Object.entries(myStorage);

// eslint-disable-next-line no-unused-vars
function addBooks() {
  const bookName = document.getElementById('name-book').value;
  const bookAuthor = document.getElementById('author-book').value;
  localStorage.setItem(bookName, bookAuthor);
}

function removeBooks(i) {
  const title = i.firstChild.innerText;
  Object.fromEntries(bookArray);
  localStorage.removeItem(title);
  bookArray = Object.entries(myStorage);
  i.remove();
}

bookArray.forEach(([key, value]) => {
  html.push(`<div class='book'><p class='book-title'>${key}</p><p class='book-author'>${value}</p><button class='remove'>Remove</button><br><br></div>`);
});

document.getElementById('book-list').innerHTML = html.join(' ');

for (let i = 0; i < document.getElementsByClassName('remove').length; i += 1) {
  const bookTitle = document.getElementsByClassName('remove')[i].parentElement;
  document.getElementsByClassName('remove')[i].addEventListener('click', () => { removeBooks(bookTitle); });
}
