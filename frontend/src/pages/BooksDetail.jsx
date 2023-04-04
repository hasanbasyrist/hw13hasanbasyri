import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../axios/books';

function BooksDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div>
      <h2>Book Details</h2>
      <div>
        <h3>Title: {book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Published Year: {book.publishedYear}</p>
        <p>ISBN: {book.isbn}</p>
        <img src={book.image} alt={book.title} />
      </div>
    </div>
  );
}

export default BooksDetails;
