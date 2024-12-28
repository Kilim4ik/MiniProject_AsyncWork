import renderPosts from "renderPosts.js";
async function startApp() {
  const posts = await getPosts(1);
  renderPosts(posts);
}
startApp();