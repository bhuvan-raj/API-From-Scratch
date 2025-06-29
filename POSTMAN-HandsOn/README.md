
# 🚀 Postman: API Testing Tool

Postman is a powerful API client that allows you to construct, send, and analyze HTTP requests and responses without writing code. It’s perfect for learning how APIs work and for testing endpoints.

<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/POSTMAN-HandsOn/assets/postman.gif" alt="Banner" />

---

## 🧰 Why Use Postman?

- Build and send API requests easily
- Test REST APIs with GET, POST, PUT, DELETE, etc.
- View formatted JSON responses
- Organize endpoints using collections
- Use variables and environments for flexible testing
- Automate testing with scripts

---

## 💻 Installing Postman

### 🔹 Windows
1. Visit [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2. Download the Windows installer (`.exe`)
3. Run the installer and launch Postman

### 🔹 Linux (Manual tar.gz Installation)
1. Download: `postman-linux-x64.tar.gz` from the official site
2. Extract and move to `/opt`:
   ```bash
   tar -xzf postman-linux-x64.tar.gz
   sudo mv Postman /opt/
   sudo ln -s /opt/Postman/Postman /usr/bin/postman
````

3. Run Postman using `postman` command

### 🔹 macOS

1. Download `.zip` from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2. Unzip and drag the Postman app to your Applications folder
3. Open Postman from Launchpad

---

## 🧪 Hands-On Practice with JSONPlaceholder

**API Base URL:** `https://jsonplaceholder.typicode.com`
This public REST API simulates a real backend with fake data—perfect for testing.

---

## 📘 Exercise 1: GET All Posts

**Goal:** Retrieve all blog posts.

### 🛠 Steps in Postman:

1. Click **"New" → "Request"**
2. Name the request: `Get All Posts`
3. Set Method: `GET`
4. Set URL: `https://jsonplaceholder.typicode.com/posts`
5. Click **"Send"**
6. ✅ Response: A list of post objects in JSON format

---

## 📘 Exercise 2: GET a Single Post by ID

**Goal:** Get a blog post with a specific ID.

### 🛠 Steps:

1. Create a new request named `Get Post by ID`
2. Method: `GET`
3. URL: `https://jsonplaceholder.typicode.com/posts/1`
4. Click **"Send"**
5. ✅ Response: A single JSON object with keys: `userId`, `id`, `title`, `body`

---

## 📘 Exercise 3: Filter Posts by User

**Goal:** Fetch posts by a specific user (e.g., userId = 1)

### 🛠 Steps:

1. New request: `Filter Posts by User`
2. Method: `GET`
3. URL: `https://jsonplaceholder.typicode.com/posts`
4. Click the **"Params"** tab:

   * Key: `userId`
   * Value: `1`
5. Click **"Send"**
6. ✅ Response: All posts by user ID 1

---

## 📘 Exercise 4: Create a New Post (POST)

**Goal:** Create a new blog post

### 🛠 Steps:

1. New request: `Create New Post`
2. Method: `POST`
3. URL: `https://jsonplaceholder.typicode.com/posts`
4. Click **"Headers"** tab and add:

   * Key: `Content-Type`
   * Value: `application/json`
5. Click **"Body"** → Select `raw` → Choose `JSON` from dropdown
6. Paste the following JSON:

```json
{
  "title": "Hello API!",
  "body": "This is a test post using Postman.",
  "userId": 1
}
```

7. Click **"Send"**
8. ✅ Response: A new post with a fake `id` (e.g., `101`) — note: data isn't actually saved!

---

## 📘 Summary Table

| Exercise        | Method | Endpoint          | Purpose                        |
| --------------- | ------ | ----------------- | ------------------------------ |
| Get All Posts   | GET    | `/posts`          | Fetch all posts                |
| Get Post by ID  | GET    | `/posts/1`        | Fetch post with ID 1           |
| Filter by User  | GET    | `/posts?userId=1` | Fetch posts by a specific user |
| Create New Post | POST   | `/posts`          | Create a new blog post         |

---

## 🔗 Useful Links

* 🌐 Postman Downloads: [https://www.postman.com/downloads](https://www.postman.com/downloads)
* 🌐 JSONPlaceholder API: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
* 📚 Postman Learning Center: [https://learning.postman.com/](https://learning.postman.com/)
* 📖 API Docs: [https://jsonplaceholder.typicode.com/guide/](https://jsonplaceholder.typicode.com/guide/)

---

## 🏁 Conclusion

Postman helps you visualize and test APIs without writing code. By using a simple mock API like JSONPlaceholder, students can:

* Understand HTTP methods
* Practice parameter usage
* Create and test request bodies
* Analyze and debug responses

Happy Learning! 🎓✨

```

---

