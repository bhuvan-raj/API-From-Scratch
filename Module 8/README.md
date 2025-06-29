# ⚙️ Module 8: Practical API Integration (Coding with APIs)

**Goal:**
To write code that interacts with APIs by sending requests, processing responses, and displaying data using JavaScript and Python.

---

## 📌 8.1 Choosing a Programming Language

### 🔷 JavaScript

* **Browser:** Uses the `fetch` API to interact with APIs directly from a web page.
* **Node.js:** Suitable for server-side API interactions using `fetch` or libraries like `axios`.
* **Pros:** Universal for web development, interactive.
* **Cons:** Limited by browser security policies (CORS).

### 🐍 Python

* **Uses:** Ideal for backend scripting, automation, and data analysis.
* **Library:** Uses the `requests` library (install with `pip install requests`).
* **Pros:** Clean syntax, powerful for scripting.
* **Cons:** Not runnable in browsers.

---

## 🔄 8.2 Making GET Requests Programmatically

### ✅ JavaScript Example (using `fetch` API)

```javascript
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
```

📍 **How to Run:**

* In browser: Open DevTools (F12) → Console → Paste and run.
* In Node.js: Save as `api_script.js` → `node api_script.js`.

---

### ✅ Python Example (using `requests` library)

```python
import requests
import json

def fetch_all_posts():
    url = 'https://jsonplaceholder.typicode.com/posts'
    try:
        response = requests.get(url)
        response.raise_for_status()
        posts = response.json()
        print("All Posts:")
        print(json.dumps(posts, indent=2))
        if posts:
            print("\nFirst Post Title:", posts[0]['title'])
    except requests.exceptions.RequestException as e:
        print(f"Error fetching posts: {e}")

fetch_all_posts()
```

📍 **How to Run:**

* Save as `api_script.py`
* Run: `python api_script.py`

---

## ➕ 8.3 Making POST Requests Programmatically

### ✅ JavaScript POST

```javascript
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
```

---

### ✅ Python POST

```python
import requests
import json

def create_new_post(title, body, user_id):
    url = 'https://jsonplaceholder.typicode.com/posts'
    post_data = { "title": title, "body": body, "userId": user_id }
    headers = { "Content-Type": "application/json" }

    try:
        response = requests.post(url, headers=headers, json=post_data)
        response.raise_for_status()
        new_post = response.json()
        print("\nNewly Created Post:")
        print(json.dumps(new_post, indent=2))
    except requests.exceptions.RequestException as e:
        print(f"Error creating post: {e}")

create_new_post("Python Coded Post", "Created using Python requests.", 10)
```

---

## 🧾 8.4 Handling JSON Responses in Code

* **JavaScript:** `response.json()` parses JSON into a JS object.
* **Python:** `response.json()` parses JSON into a dictionary.

You can access nested data like:

* JS: `posts[0].title`
* Python: `posts[0]['title']`

---

## 🚨 8.5 Basic Error Handling

### JavaScript

* Use `.catch()` for network errors.
* Use `response.ok` to handle HTTP errors.

### Python

* Use `try...except` with `requests.exceptions.RequestException`.
* Use `response.raise_for_status()` to throw on 4xx/5xx errors.

---

## 🖥️ 8.6 Displaying Data

### 🧪 Console Output

* JavaScript: `console.log()`
* Python: `print()`

### 🧑‍💻 Injecting into HTML (Browser JS)

```html
<!DOCTYPE html>
<html>
<head><title>API Data Display</title></head>
<body>
  <h1>Latest Blog Posts</h1>
  <ul id="posts-list"></ul>

  <script>
    async function displayPosts() {
      const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
      const postsList = document.getElementById('posts-list');

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const posts = await response.json();

        posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<strong>${post.title}</strong><p>${post.body.substring(0, 100)}...</p>`;
          postsList.appendChild(listItem);
        });
      } catch (error) {
        console.error("Error displaying posts:", error);
        postsList.innerHTML = `<li style="color:red;">Failed to load posts: ${error.message}</li>`;
      }
    }

    displayPosts();
  </script>
</body>
</html>
```

📍 **How to Run:**
Save as `index.html` and open in any browser.

---

## 📚 Summary

| Task              | JavaScript Method          | Python Method                      |
| ----------------- | -------------------------- | ---------------------------------- |
| Make GET request  | `fetch()`                  | `requests.get()`                   |
| Make POST request | `fetch()` with options     | `requests.post()`                  |
| Parse JSON        | `response.json()`          | `response.json()`                  |
| Error handling    | `try/catch`, `response.ok` | `try/except`, `raise_for_status()` |

---

> This module gives you real coding experience in integrating APIs into your apps using two of the most widely used programming languages: JavaScript and Python.
