let token = localStorage.getItem("token");
/**
 * 
 * @returns Promise
 */
const getAllPosts = async () => {
    const response = await fetch("http://192.168.1.3:8000/api/posts", {
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
    const response = await fetch("http://192.168.1.3:8000/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ title: title, content: content, user_id: user_id, image: image }),
    });
    if (response.ok) {
        return { message: "Post created successfully", status: response.status}
    } else {
        return { message: "Post not created", status: response.status};
    }
}

const deletePost = async (id) => {
    const response = await fetch(`http://192.168.1.3:8000/api/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    if (response.ok) {
        return { message: "Post deleted successfully", status: response.status}
    } else {
        return { message: "Post not deleted", status: response.status};
    }
}

const parseContent = (content) => {
    let words = content.split(" ");
    words.forEach(word => {
        let anyDomain = word.match(/(http|https):\/\/(\S+)\.(\w{2,4})/g);
        if(anyDomain) {
            content = content.replace(word, `<a href="${word}">${word}</a>`);
        } else if(word.startsWith('@')) {
            content = content.replace(word, `<a href="/profile/${word.substring(1)}">${word}</a>`);
        }
    });
    return content;
}

const getComments = async (id) => {
    const response = await fetch(`http://192.168.1.3:8000/api/posts/${id}/comments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

const insertComment = async (content, user_id, post_id) => {
    console.log(content, user_id, post_id);
    const response = await fetch("http://192.168.1.3:8000/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ content: content, user_id: user_id, post_id: post_id }),
    });
    if (response.ok) {
        return { message: "Comment created successfully", status: response.status}
    } else {
        return { message: "Comment not created", status: response.status};
    }
}

export { getAllPosts, insertPost, parseContent, deletePost, getComments, insertComment };