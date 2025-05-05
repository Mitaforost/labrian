const API_BASE_URL = "http://localhost:5000";

// Базовый GET-запрос
export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else {
            throw new Error("Ответ не является JSON");
        }
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error.message);
        throw new Error(error.message || "Неизвестная ошибка при загрузке данных");
    }
};

// Базовый POST-запрос
export const postData = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else {
            throw new Error("Ответ сервера не JSON");
        }
    } catch (error) {
        console.error("Ошибка при отправке данных:", error.message);
        throw new Error(error.message || "Неизвестная ошибка при отправке данных");
    }
};
