import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./BookSearch.module.scss";

const BookSearch = () => {
    const [title, setTitle] = useState("");
    const [genreId, setGenreId] = useState(null);
    const [catalogId, setCatalogId] = useState(null);
    const { data: books, loading, error } = useFetch(
        `books?title=${title}&genreId=${genreId}&catalogId=${catalogId}`
    );

    const handleSearch = (e) => {
        e.preventDefault();
        // Параметры поиска обновляются через useFetch
    };

    return (
        <section className={styles.search}>
            <h1>Поиск книг</h1>
            <form onSubmit={handleSearch} className={styles.search__form}>
                <input
                    type="text"
                    placeholder="Название книги"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="ID жанра"
                    value={genreId || ""}
                    onChange={(e) => setGenreId(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="ID каталога"
                    value={catalogId || ""}
                    onChange={(e) => setCatalogId(Number(e.target.value))}
                />
                <button type="submit">Поиск</button>
            </form>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error.message}</p>}
            {books && (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            {book.title} - {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default BookSearch;
