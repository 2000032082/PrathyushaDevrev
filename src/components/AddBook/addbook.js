// app.js
import React from "react";
const { useState } = React;

// Book component
const Book = ({ name, author, type }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>{type}</td>
    </tr>
  );
};

// Display component
const Display = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.bookName.value;
    const author = e.target.author.value;
    const type = e.target.type.value;

    if (name.length < 2 || author.length < 2) {
      setMessage('Sorry, you cannot add this book.');
      return;
    }

    const newBook = { name, author, type };
    setBooks([...books, newBook]);
    setMessage('Your book has been successfully added.');

    e.target.reset();
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {message && (
        <div
          style={{
            marginTop: "15px",
            color: "#155724",
            backgroundColor: "#d4edda",
            borderColor: "#c3e6cb",
            padding: "8px",
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            className="form-control"
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            className="form-control"
            style={{ width: "100%", padding: "8px" }}
            required
          >
            <option value="">Select Type</option>
            <option value="fiction">Fiction</option>
            <option value="programming">Programming</option>
            <option value="cooking">Cooking</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Add Book
        </button>
      </form>

      {books.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }} className="table mt-4">
          <thead>
            <tr>
              <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Author</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Type</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <Book key={index} {...book} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Display;
