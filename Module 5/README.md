
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

Sure Bubu! Here's a clean and professional `README.md` file for your **JSONPlaceholder Postman Practice Tasks** — great for a GitHub project or personal learning repository.

---

# 🧪 JSONPlaceholder Postman Practice Tasks

Welcome to a hands-on lab using [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free, fake REST API for testing and prototyping. This project includes a set of API tasks designed to help you master key HTTP methods using **Postman**.

---

## 📋 Base URL

```

[https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

````

---

## ✅ Task List

### 1. Get All Posts
- **Method**: `GET`
- **Endpoint**: `/posts`
- **Goal**: Fetch all blog posts.

---

### 2. Get a Specific Post by ID
- **Method**: `GET`
- **Endpoint**: `/posts/5`
- **Goal**: Fetch a single post with ID = 5.


### 3. Create a New Post
- **Method**: `POST`
- **Endpoint**: `/posts`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
```json
{
  "title": "Learning Postman",
  "body": "This is a practice task",
  "userId": 2
}
````

* **Expected Status**: `201 Created`

---

### 4. Update a Post (Full Replace)

* **Method**: `PUT`
* **Endpoint**: `/posts/1`
* **Body**:

```json
{
  "id": 1,
  "title": "Updated Post",
  "body": "Updated content",
  "userId": 2
}
```

---

### 5. Partially Update a Post

* **Method**: `PATCH`
* **Endpoint**: `/posts/1`
* **Body**:

```json
{
  "title": "Patched Title"
}
```

---

### 6. Delete a Post

* **Method**: `DELETE`
* **Endpoint**: `/posts/1`
* **Goal**: Delete the post with ID = 1.

---

## ⚠️ Note

JSONPlaceholder is a mock API. While it simulates real-world responses, no actual data is stored. Use it for safe testing of HTTP verbs and API behavior.

---


---

## ✅ Summary

| Tool     | Best For                           |
| -------- | ---------------------------------- |
| Postman  | GUI-based testing & collaboration  |
| Insomnia | Lightweight alternative to Postman |
| cURL     | Terminal and scripting             |
| DevTools | Inspecting live website requests   |


