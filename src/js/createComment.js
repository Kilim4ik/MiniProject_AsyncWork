// Додавання коментаря до поста
async function createComment(postId, comment) {
    try {
    } catch (error) {
    console.error(error);
    }
    }
    // Обробник події для додавання коментаря
document.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    if (form.matches('.createCommentForm')) {
        const postId = form.dataset.postId;
        const commentInput = form.querySelector('.commentInput');
        const comment = commentInput.value.trim();

        if (!comment) {
            console.error('Коментар не може бути порожнім');
            return;
        }

        const newComment = await createComment(postId, comment);
        if (newComment) {
            const commentsList = form.closest('.commentsContainer').querySelector('.commentsList');
            const newCommentItem = document.createElement('li');
            newCommentItem.textContent = newComment.text;
            commentsList.appendChild(newCommentItem);

            commentInput.value = '';
        }
    }})
