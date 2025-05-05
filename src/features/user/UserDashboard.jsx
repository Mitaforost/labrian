import React, { useState } from "react";
import BookFilter from "./BookFilter";
import BookCard from "../../components/BookCard/BookCard";
import useFetch from "../../hooks/useFetch";
import styles from "./UserDashboard.module.scss";

const UserDashboard = () => {
    const [filters, setFilters] = useState({});
    const { data: books, loading, error } = useFetch(
        `books?title=${filters.title || ""}&genreId=${filters.genreId || ""}&catalogId=${filters.catalogId || ""}`
    );

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className={styles.dashboard}>
            <h1>Личный кабинет</h1>
            <BookFilter onFilter={handleFilter} />
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error.message}</p>}
            <div className={styles.books}>
                {books && books.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default UserDashboard;
