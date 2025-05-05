import React, { useState } from "react";
import styles from "./BookFilter.module.scss";

const BookFilter = ({ onFilter }) => {
    const [title, setTitle] = useState("");
    const [genreId, setGenreId] = useState(null);
    const [catalogId, setCatalogId] = useState(null);

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter({ title, genreId, catalogId });
    };

    return (
        <div className={styles.filter}>
            <h2>Фильтр книг</h2>
            <form onSubmit={handleFilter}>
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
                <button type="submit">Применить</button>
            </form>
        </div>
    );
};

export default BookFilter;
