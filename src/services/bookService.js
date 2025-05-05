import { fetchData, postData } from "./api";

export const getBooks = async (filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await fetchData(`books?${queryParams}`);
};

export const addBook = async (bookData) => {
    return await postData("books", bookData);
};
