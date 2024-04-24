/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns
 */
let login = async (email, password) => {
  fetch("https://backend.fiatlinux.it/sanctum/csrf-cookie").then( async response => {
    // set csrf token
    const csrfToken = response.headers.get("X-CSRF-TOKEN");
    localStorage.setItem("csrfToken", csrfToken);
    const uresponse = await fetch("https://backend.fiatlinux.it/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
      },
      body: JSON.stringify({ email, password }),
    });

    if (uresponse.ok) {
      console.log(uresponse);
      if(uresponse.status == 200) {
        const user = await uresponse.json();
        if(user.user.id == 1) {
          user.user.role = "admin";
        }
        localStorage.setItem("user", JSON.stringify(user.user));
        localStorage.setItem("token", user.token);
        location.href = "/";
      } else {
        return "Invalid email or password";
      }
    } else {
        return "Invalid email or password";
    }
  });
};

let register = async (name, email, password) => {
    const response = await fetch("https://backend.fiatlinux.it/api/auth/register", {
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
    const response = await fetch("https://backend.fiatlinux.it/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
  }

let update = async (name, email, pfp) => {
    const response = await fetch("https://backend.fiatlinux.it/api/auth/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ name, email, pfp }),
    });
    response.json().then(data => {
      if(data.error) {
        return data.error;
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        location.href = "/";
      }
    });
  }

export { login, register, logout, update };