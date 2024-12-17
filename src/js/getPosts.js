// Отримання списку постів
const baseURL = 'http://localhost:3000';
async function getPosts(page) {
  try {
    return fetch(`${baseURL}&page=${page}`).then(res => res.json());
  } catch (error) {
    console.error(error);
  }
}
