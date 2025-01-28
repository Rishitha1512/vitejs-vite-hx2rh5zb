// src/components/AddBook.jsx

import { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding the book (no functionality needed for now)
    console.log({ title, author, description, coverImage });
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
