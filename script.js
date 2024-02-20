let library = [];

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const category = document.getElementById('category').value;

  if (title && author) {
    const book = {
      title: title,
      author: author,
      category: category
    };
    library.push(book);
    displayBooks();
    clearInputs();
  } else {
    alert('Please enter both title and author!');
  }
}

function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  library.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author} (${book.category})`;
    bookList.appendChild(listItem);
  });
}

function clearInputs() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

function searchBooks() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredBooks = library.filter(book => 
    book.title.toLowerCase().includes(searchInput) || book.author.toLowerCase().includes(searchInput)
  );
  library = filteredBooks;
  displayBooks();
}
