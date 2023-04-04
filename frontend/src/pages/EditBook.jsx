import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../api/books';

function EditBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchBook() {
      try {
        const book = await getBookById(id);
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBook();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      await updateBook(id, formData);
      history.push(`/books/${id}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Update Book'}
        </button>
      </form>
    </div>
  );
}

export default EditBook;
