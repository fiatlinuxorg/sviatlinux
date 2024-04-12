let token = localStorage.getItem("token") || null;
/**
 * 
 * @returns Promise
 */
const getAllPosts = async () => {
    const response = await fetch("http://localhost:8000/api/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
};

/**
 * 
 * @param {string} title 
 * @param {*} content 
 * @param {*} user_id 
 * @param {*} image 
 * @returns 
 */
const insertPost = async (title, content, user_id, image) => {
    const response = await fetch("http://localhost:8000/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ title: title, content: content, user_id: user_id, image: image }),
    });
    if (response.ok) {
        return { message: "Post created successfully"}
    } else {
        return { message: "Post not created"};
    }
}

export { getAllPosts, insertPost };