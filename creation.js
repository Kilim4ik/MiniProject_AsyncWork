// Створення нового поста
async function createPost(title, content) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title, body: content }),
    });
        const data = await response.json();
        return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Обробник події для створення поста
document.getElementById("createPostForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("titleInput").value;
    const content = document.getElementById("contentInput").value;

    const newPost = await createPost(title, content);

    if (newPost) {
      const postsContainer = document.getElementById("postsContainer");
      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <h3>${newPost.title}</h3>
        <p>${newPost.body}</p>
        <hr>
      `;
      postsContainer.prepend(postElement);
    }
  });
