import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../api/books';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/books/new">Add a new book</Link>
    </div>
  );
}

export default Books;
