async function createNewPost(title, body, userId) {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const postData = { title, body, userId };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const newPost = await response.json();
    console.log("Newly Created Post:", newPost);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

createNewPost("JS Coded Post", "Created using JavaScript fetch API.", 10);
