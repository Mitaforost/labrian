import React, { useState } from "react";
import { fetchData, postData } from "../../services/api";
import styles from "./CatalogCRUD.module.scss";

const CatalogCRUD = () => {
    const [catalogs, setCatalogs] = useState([]);
    const [newCatalog, setNewCatalog] = useState("");

    const fetchCatalogs = async () => {
        const data = await fetchData("catalogs");
        setCatalogs(data);
    };

    const addCatalog = async () => {
        await postData("catalogs", { name: newCatalog });
        setNewCatalog("");
        fetchCatalogs();
    };

    return (
        <div className={styles.crud}>
            <h2>Управление каталогами</h2>
            <input
                type="text"
                value={newCatalog}
                onChange={(e) => setNewCatalog(e.target.value)}
                placeholder="Название каталога"
            />
            <button onClick={addCatalog}>Добавить</button>
            <ul>
                {catalogs.map((catalog) => (
                    <li key={catalog.id}>{catalog.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CatalogCRUD;
