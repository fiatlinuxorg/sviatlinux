let login = async (email, password) => {
    const response = await fetch("http://localhost:8000/api/auth/login", {
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

export { login };