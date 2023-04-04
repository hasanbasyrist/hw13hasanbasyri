import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../utils/api';
import BookCard from '../components/BookCard';

const Homepage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-8">
        <h1 className="text-2xl font-semibold">Bookshelf</h1>
        <Link to="/create-book" className="bg-blue-500 text-white rounded-lg py-2 px-4 font-semibold">
          Add Book
        </Link>
      </div>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center py-8">No books found.</p>
      )}
    </div>
  );
};

export default Homepage;
