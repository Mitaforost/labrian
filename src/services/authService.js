const API_URL = "http://127.0.0.1:5000/users";

// ЛОГИН
export async function loginUser({ email, password }) {
    const response = await fetch(`${API_URL}`);
    const users = await response.json();

    if (!response.ok) {
        throw new Error("Ошибка входа");
    }

    const user = users.find(user => user.email === email && user.passwordHash === password);

    if (!user) {
        throw new Error("Неверный email или пароль");
    }

    return user;
}

// РЕГИСТРАЦИЯ
export async function registerUser({ fullName, email, phone, password }) {
    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fullName,
            email,
            phone,
            passwordHash: password,
            createdAt: new Date().toISOString()
        }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || "Ошибка регистрации");
    }
    return data;
}
