# Module 3: Anatomy of an API Request

> **Goal:** To dissect the components that make up a typical HTTP API request.

<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%203/assets/api.gif" alt="Banner" />




An API request is a structured message sent from a client to a server. Understanding its components is crucial for making effective API calls.

---

## 3.1 HTTP Methods (Verbs of the Web)

HTTP methods, also known as HTTP verbs, indicate the desired action to be performed on the resource identified by the URL. They define the type of operation you want to execute.

---

### 🔹 GET (Retrieve)

- **Purpose:** Used to request data from a specified resource. It should only retrieve data and have no other effect on the data.
- **Characteristics:** Idempotent (making the same GET request multiple times has the same effect as making it once) and Safe (it doesn't alter the server's state).
- **Usage:** Fetching a list of users, getting details of a specific product, downloading an image.
- **Example:**  
  `GET /users`  
  `GET /products/123`

---

### 🔹 POST (Create)

- **Purpose:** Used to submit data to a specified resource, often causing a change in state or the creation of a new resource.
- **Characteristics:** Not idempotent (sending the same POST request multiple times might create duplicate resources).
- **Usage:** Creating a new user, submitting a form, adding an item to a shopping cart.
- **Example:**  
  `POST /users` (with user data in the request body)

---

### 🔹 PUT (Update/Replace)

- **Purpose:** Used to update a resource or create it if it doesn't exist. It replaces the entire resource with the data provided in the request body.
- **Characteristics:** Idempotent (sending the same PUT request multiple times will have the same effect – the resource will be replaced with the exact same data).
- **Usage:** Updating all details of a user, replacing a document.
- **Example:**  
  `PUT /products/123` (with all product data in the body)

---

### 🔹 PATCH (Partial Update)

- **Purpose:** Used to apply partial modifications to a resource. Only the specified fields are updated.
- **Characteristics:** Not necessarily idempotent (depends on the server's implementation), but generally used for partial updates.
- **Usage:** Updating only a user's email address, changing the quantity of an item in a cart.
- **Example:**  
  `PATCH /users/456` (with only `{ "email": "new@example.com" }` in the body)

---

### 🔹 DELETE (Remove)

- **Purpose:** Used to delete the specified resource.
- **Characteristics:** Idempotent (deleting a resource multiple times has the same effect as deleting it once – it's still gone).
- **Usage:** Removing a user account, deleting a blog post.
- **Example:**  
  `DELETE /products/123`

---

### 🔹 (Optional but good to know)

- **HEAD:** Similar to GET, but only retrieves the response headers, not the actual response body. Useful for checking resource existence or metadata.
- **OPTIONS:** Used to describe the communication options for the target resource. Clients can use this to determine the allowed methods and other capabilities of a resource.

---

## 3.2 URLs and Endpoints

### 🔸 Base URL

The common starting part of all URLs for a particular API. It's like the address of the API server.

- **Examples:**  
  `https://api.github.com`  
  `https://api.openweathermap.org/data/2.5`

### 🔸 Endpoint

A specific URL that represents a particular resource or function within the API. It's the unique path to access a specific piece of data or perform a specific action.

**Examples (for `https://api.github.com`):**
- `/users` → Get a list of users
- `/users/{username}` → Get details of a specific user
- `/repos/{owner}/{repo}` → Get details of a specific repository

**Combined Example:**  
`https://api.github.com/users/octocat` is a full API endpoint.

---

## 3.3 Request Parameters

Parameters are additional pieces of information sent with a request to customize the response or specify details for an action.

---

### 3.3.1 Query Parameters

- **Location:** Appended to the URL after a `?` (question mark).
- **Format:** Key-value pairs separated by `&` (ampersand).
- **Purpose:** Primarily used with GET requests for filtering, sorting, searching, or pagination. They don't identify a unique resource but modify the type of data returned from a general resource.

**Example:**  
`GET /products?category=electronics&min_price=100&sort_by=price`

- `category=electronics`: Filter by electronics  
- `min_price=100`: Only products costing $100 or more  
- `sort_by=price`: Sort results by price

---

### 3.3.2 Path Parameters

- **Location:** Part of the URL path itself, typically enclosed in curly braces `{}` in documentation to denote a variable segment.
- **Purpose:** Used to identify a specific resource or a specific entity within a collection.

**Examples:**
- `GET /users/123` → 123 is the user ID
- `GET /products/ABC-XYZ-789/reviews` → `ABC-XYZ-789` identifies a specific product

---

## 3.4 Request Headers

Headers are key-value pairs that provide metadata about the request or the client making the request. They are not part of the request body or URL.

Common request headers:

- **Content-Type:** Tells the server the format of the data being sent in the request body (e.g., `application/json`, `application/xml`, `text/plain`). Crucial for POST, PUT, PATCH requests.
- **Accept:** Tells the server what media types the client prefers to receive in the response (e.g., `application/json`).
- **Authorization:** Contains credentials for authenticating the client with the server (e.g., API keys, OAuth tokens).
- **User-Agent:** Identifies the client software making the request (e.g., `Mozilla/5.0`, `PostmanRuntime/7.29.0`).
- **Cache-Control:** Directives for caching mechanisms.
- **Host:** The domain name of the server being requested.

---

## 3.5 Request Body (Payload)

- **Purpose:** Carries the actual data that the client wants to send to the server.
- **Usage:** Primarily used with POST, PUT, and PATCH requests, where you are creating or updating a resource.  
  GET and DELETE requests typically do not have a request body (though some obscure configurations might allow it, it's not standard practice).
- **Format:** The format of the request body is specified by the `Content-Type` header.  
  The most common format for web APIs today is **JSON (JavaScript Object Notation)**.

---
