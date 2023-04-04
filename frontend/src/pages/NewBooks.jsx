import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { createBook } from '../api/books';

const NewBooks = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      await createBook(formData);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Create New Book</h1>
      {error && <div className="error">{error}</div>}
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewBooks;
