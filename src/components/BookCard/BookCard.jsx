import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    return (
        <div className={styles.card}>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Жанр: {book.genre || "Не указан"}</p>
            <p>Каталог: {book.catalog || "Не указан"}</p>
            <a href={book.url} target="_blank" rel="noopener noreferrer">
                Подробнее
            </a>
        </div>
    );
};

export default BookCard;
