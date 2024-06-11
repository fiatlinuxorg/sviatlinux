/**
 * 
 * @param {string} email
 * @param {string} password
 */
const login = async (email, password) => {
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

export { login }