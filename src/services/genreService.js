import { fetchData } from "./api";

export const getGenres = async () => {
    return await fetchData("genres");
};
