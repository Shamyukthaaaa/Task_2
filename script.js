// Form submission handler
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    // Perform form validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Perform signup logic (e.g., send data to backend, create user)
  
    // Redirect to login page
    window.location.href = "login.html";
  });
  

  // Form submission handler
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login logic (e.g., send data to backend for authentication)
  
    // Redirect to home page upon successful login
    window.location.href = "book-list.html";
  });

  // Function to fetch book data from the backend or API
function fetchBooks() {
    // Replace this with your own logic to fetch book data
    return [
      { title: "Book 1", author: "Author 1", details: "Details 1" },
      { title: "Book 2", author: "Author 2", details: "Details 2" },
      { title: "Book 3", author: "Author 3", details: "Details 3" }
    ];
  }
  
  // Function to render the book list on the page
  function renderBookList(books) {
    var bookListElement = document.getElementById("book-list");
    
    books.forEach(function(book) {
      var bookCard = document.createElement("div");
      bookCard.className = "book-card";
  
      var titleElement = document.createElement("h3");
      titleElement.className = "book-title";
      titleElement.textContent = book.title;
  
      var authorElement = document.createElement("p");
      authorElement.className = "book-author";
      authorElement.textContent = "By " + book.author;
  
      var detailsElement = document.createElement("p");
      detailsElement.className = "book-details";
      detailsElement.textContent = book.details;
  
      bookCard.appendChild(titleElement);
      bookCard.appendChild(authorElement);
      bookCard.appendChild(detailsElement);
  
      bookListElement.appendChild(bookCard);
    });
  }
  
  // Fetch books and render the book list on page load
  document.addEventListener("DOMContentLoaded", function() {
    var books = fetchBooks();
    renderBookList(books);
  });
  


// Book data (replace with your own data or fetch from backend)
var books = [
    { title: "Book 1", author: "Author 1", genre: "Genre 1", year: 2021 },
    { title: "Book 2", author: "Author 2", genre: "Genre 2", year: 2022 },
    { title: "Book 3", author: "Author 3", genre: "Genre 3", year: 2023 },
    // Add more books as needed
  ];
  
  // Function to perform search and display suggestions
  function searchBooks(query) {
    var searchResultsElement = document.getElementById("search-results");
    searchResultsElement.innerHTML = ""; // Clear previous results
  
    if (query.trim() === "") {
      return; // Empty query, no suggestions
    }
  
    var results = books.filter(function(book) {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase()) ||
        String(book.year).includes(query)
      );
    });
  
    results.forEach(function(book) {
      var listItem = document.createElement("li");
      listItem.textContent = book.title;
      listItem.addEventListener("click", function() {
        // Perform action when a suggestion is clicked (e.g., navigate to book details page)
        console.log("Clicked:", book.title);
      });
      searchResultsElement.appendChild(listItem);
    });
  }
  
  // Get search input element
  var searchInput = document.getElementById("search-input");
  
  // Perform search on input change
  searchInput.addEventListener("input", function() {
    var query = searchInput.value;
    searchBooks(query);
  });

  
// Book data (replace with your own data or fetch from backend)
var books = [
    { id: 1, title: "Book 1", author: "Author 1", availability: 5 },
    { id: 2, title: "Book 2", author: "Author 2", availability: 3 },
    { id: 3, title: "Book 3", author: "Author 3", availability: 2 },
    // Add more books as needed
  ];
  
  var cartItems = [];
  
  // Function to render the book list on the page
  function renderBookList() {
    var bookListElement = document.getElementById("book-list");
    bookListElement.innerHTML = ""; // Clear previous results
  
    books.forEach(function(book) {
      var bookCard = document.createElement("div");
      bookCard.className = "book-card";
  
      var titleElement = document.createElement("h3");
      titleElement.className = "book-title";
      titleElement.textContent = book.title;
  
      var authorElement = document.createElement("p");
      authorElement.className = "book-author";
      authorElement.textContent = "By " + book.author;
  
      var availabilityElement = document.createElement("p");
      availabilityElement.className = "book-availability";
      availabilityElement.textContent = "Available: " + book.availability;
  
      var addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.addEventListener("click", function() {
        addToCart(book);
      });
  
      bookCard.appendChild(titleElement);
      bookCard.appendChild(authorElement);
      bookCard.appendChild(availabilityElement);
      bookCard.appendChild(addToCartButton);
  
      bookListElement.appendChild(bookCard);
    });
  }
  
  // Function to add a book to the cart
  function addToCart(book) {
    if (book.availability > 0) {
      var cartItemsElement = document.getElementById("cart-items");
    }
}
