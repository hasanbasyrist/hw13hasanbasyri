import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onSubmit, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="coverImage">Cover Image:</label>
        <input
          type="file"
          name="coverImage"
          onChange={(event) => {
            setFormData({
              ...formData,
              coverImage: event.target.files[0],
            });
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialFormData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverImage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
  }).isRequired,
};

export default BookForm;
