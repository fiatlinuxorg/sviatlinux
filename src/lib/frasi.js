const getFrasi = async () => {
    const response = await fetch("https://backend.fiatlinux.it/api/frasi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    return data;
};

export  { getFrasi }