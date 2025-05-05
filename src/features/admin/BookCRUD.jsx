import React, { useState } from "react";
import { fetchData, postData } from "../../services/api";
import styles from "./BookCRUD.module.scss";

const BookCRUD = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        url: "",
        genreId: null,
        catalogId: null,
    });

    const fetchBooks = async () => {
        const data = await fetchData("books");
        setBooks(data);
    };

    const addBook = async () => {
        await postData("books", newBook);
        setNewBook({ title: "", author: "", url: "", genreId: null, catalogId: null });
        fetchBooks();
    };

    return (
        <div className={styles.crud}>
            <h2>Управление книгами</h2>
            <input
                type="text"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                placeholder="Название книги"
            />
            <input
                type="text"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                placeholder="Автор"
            />
            <input
                type="text"
                value={newBook.url}
                onChange={(e) => setNewBook({ ...newBook, url: e.target.value })}
                placeholder="URL"
            />
            <input
                type="number"
                value={newBook.genreId || ""}
                onChange={(e) => setNewBook({ ...newBook, genreId: Number(e.target.value) })}
                placeholder="ID жанра"
            />
            <input
                type="number"
                value={newBook.catalogId || ""}
                onChange={(e) => setNewBook({ ...newBook, catalogId: Number(e.target.value) })}
                placeholder="ID каталога"
            />
            <button onClick={addBook}>Добавить</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookCRUD;
