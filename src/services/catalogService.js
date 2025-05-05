import { fetchData, postData } from "./api";

export const getCatalogs = async () => {
    return await fetchData("catalogs");
};

export const addCatalog = async (catalogData) => {
    return await postData("catalogs", catalogData);
};
