async function deletePost(id) {
    try {
        await fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });
        await getPosts();
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('deletePostButton')) {
        const postId = event.target.dataset.id;
        if (confirm('Ви дійсно хочете видалити цей пост?')) {
            await deletePost(postId);
        }
    }
});
