/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
let login = async (email, password) => {
    const response = await fetch("http://192.168.1.3:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user.user));
      localStorage.setItem("token", user.token);
      location.href = "/";
    } else {
        const error = "Invalid email or password";
        return error;
    }
  };

let register = async (name, email, password) => {
    const response = await fetch("http://192.168.1.3:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      location.href = "/";
    } else {
        const error = "Invalid email or password";
        return error;
    }
  }

let logout = async () => {
    const response = await fetch("http://192.168.1.3:8000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
  }

let update = async (name, email, password) => {
    const response = await fetch("http://192.168.1.3:8000/api/auth/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ name, email }),
    });
  }

export { login, register, logout, update };