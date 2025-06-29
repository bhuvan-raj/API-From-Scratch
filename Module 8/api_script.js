async function fetchAllPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const posts = await response.json();
    console.log("All Posts:", posts);
    if (posts.length > 0) console.log("First Post Title:", posts[0].title);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchAllPosts();
