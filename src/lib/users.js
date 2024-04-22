let token = localStorage.getItem("token") || null;

const getAllUsers = async () => {
    const response = await fetch("http://192.168.1.3:8000/api/users", {
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