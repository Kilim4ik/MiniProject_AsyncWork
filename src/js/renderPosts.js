// Оновлення відображення постів на сторінці
export function renderPosts(posts) {
  document.querySelector('body').innerHTML =
    posts
      .map(
        post => `
    <div class="post">
    <h2>${post.title}</h2>
    <p>${post.text}</p>
    <button class="editPostButton" data-id="${post.id}">Редагувати</button>
    <button class="deletePostButton" data-id="${post.id}">Видалити</button>
   
  </div>
    `
      )
      .join(',') + '<button id=pagination-button>load more</button>';
}
