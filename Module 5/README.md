
# Module 5: Interacting with APIs (Tools & Practice)


<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%205/assets/api.png" alt="Banner" />

**Goal:** To gain hands-on experience making API requests and interpreting responses using popular tools.

This module brings the theory of previous modules into practice. You’ll learn to send API requests and inspect responses using real-world tools—essential for testing and understanding APIs before writing code.

---

## 5.1 API Documentation: Your API Map

Before interacting with an API, study its documentation. It’s your blueprint.

### What to Look for:

- **Base URL:**  
  Common prefix for all API endpoints (e.g., `https://api.example.com/v1`)

- **Authentication:**  
  How the API verifies your identity (API Key, OAuth, etc.)

- **Endpoints:**  
  Paths to resources (e.g., `/users`, `/products/{id}`)

- **HTTP Methods:**  
  Supported actions for each endpoint (GET, POST, PUT, DELETE)

- **Request Parameters:**  
  - **Path Parameters:** Variable parts of URL (e.g., `/users/{id}`)  
  - **Query Parameters:** Optional filters (e.g., `?limit=10&offset=20`)  
  - **Request Body:** JSON (or other format) required for POST/PUT/PATCH

- **Response Format:**  
  Structure of the returned data (usually JSON)

- **Error Codes:**  
  Meaning of status codes and error responses

- **Examples:**  
  Ready-made cURL/code snippets to help understand usage

- **Rate Limits:**  
  API usage limits within a given time frame


<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%205/assets/api.gif" alt="Banner" />


🔹 Official Documentation & Guide (JSONPlaceholder)

📎 Link: https://jsonplaceholder.typicode.com/guide/
This is the official, human-readable guide provided by JSONPlaceholder. It explains endpoints like /posts, /users, /comments, and how to make GET, POST, PUT, DELETE requests.

🔹Swagger/OpenAPI Style Documentation

📎 Link: https://arnu515.github.io/jsonplaceholder-api-docs/
This is an unofficial, well-structured OpenAPI-based version of the JSONPlaceholder API documentation. 

---

## 5.2 Tools for API Interaction

### 5.2.1 Browser Developer Tools – *Revisited*

Use the **Network tab** to inspect requests/responses made by websites. Best for analysis, not sending new requests.

---

### 5.2.2 Postman – *Highly Recommended*

A user-friendly and powerful API client.

📥 **Download Postman:**  
[https://www.postman.com/downloads](https://www.postman.com/downloads)

---

### 5.2.3 Insomnia – *Alternative to Postman*

Lightweight and easy-to-use desktop API client.

📥 **Download Insomnia:**  
[https://insomnia.rest/download](https://insomnia.rest/download)

---

### 5.2.4 cURL – *Command Line*

Ideal for scripting and quick terminal-based testing.

#### GET Request:
```bash
curl -X GET "https://api.example.com/users/1"
````

#### POST Request with JSON:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}' \
  "https://api.example.com/users"
```

---


## 5.3 Making Your First API Calls (Hands-on Practice)

Using a public mock API: **[JSONPlaceholder](https://jsonplaceholder.typicode.com)**
No authentication needed.

---

### 🔹 Exercise 5.3.1: Fetch All Posts

**Goal:** Get all blog posts.

* Method: `GET`
* URL: `https://jsonplaceholder.typicode.com/posts`

✅ **Expected Output:**
An array of post objects with fields: `userId`, `id`, `title`, `body`

---

### 🔹 Exercise 5.3.2: Fetch a Single Post by ID

**Goal:** Get post with ID = 1

* Method: `GET`
* URL: `https://jsonplaceholder.typicode.com/posts/1`

✅ **Expected Output:**
A single post object for ID = 1

---

### 🔹 Exercise 5.3.3: Filter Posts by User ID

**Goal:** Get all posts by user ID = 1

* Method: `GET`
* URL: `https://jsonplaceholder.typicode.com/posts?userId=1`

> 💡 **Tip:** In Postman, use the *Params* tab → Key: `userId`, Value: `1`

✅ **Expected Output:**
Filtered array of posts for `userId = 1`

---

### 🔹 Exercise 5.3.4: Create a New Post

**Goal:** Send a new post using POST

* Method: `POST`
* URL: `https://jsonplaceholder.typicode.com/posts`

**Headers:**

```
Key:   Content-Type
Value: application/json
```

**Body (raw JSON):**

```json
{
  "title": "My New Post Title",
  "body": "This is the content of my brand new post.",
  "userId": 1
}
```

✅ **Expected Output:**

* **Status:** 201 Created
* **Response:** New post JSON with assigned `id`

> ⚠️ **Note:** JSONPlaceholder is a mock API. Data is **not persisted**. POST/PUT/DELETE requests simulate success but don’t store the data.

---

## ✅ Summary

| Tool     | Best For                           |
| -------- | ---------------------------------- |
| Postman  | GUI-based testing & collaboration  |
| Insomnia | Lightweight alternative to Postman |
| cURL     | Terminal and scripting             |
| DevTools | Inspecting live website requests   |


