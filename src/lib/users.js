let token = localStorage.getItem("token") || null;

const getAllUsers = async () => {
    const response = await fetch("http://localhost:8000/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

export { getAllUsers };