let token = localStorage.getItem("token") || null;

const getAllUsers = async () => {
    const response = await fetch("https://backend.fiatlinux.it/api/users", {
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