# 🔐 Module 6: Authentication & Authorization (Security Basics)

**Goal:**  
Understand the importance of securing APIs and learn the fundamentals of authentication and authorization.

<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%206/assets/api.png" alt="Banner" />


---

## ✅ Why Authentication and Authorization Matter

Modern APIs must protect data and control access. Key reasons include:

- **🔒 Security:** Prevent unauthorized access to sensitive information.
- **🛂 Access Control:** Ensure users only access permitted resources or actions.
- **⚙️ Resource Management:** Avoid abuse (e.g., spamming, DDoS).
- **🧾 Accountability:** Track who did what and when.
- **💰 Billing/Monetization:** Used to track usage for billing in commercial APIs.

---

## 🔑 Authentication vs. Authorization

| Term            | Purpose                                | Example                                 |
|-----------------|----------------------------------------|-----------------------------------------|
| **Authentication** | Verifies the client's identity          | Showing your ID to enter a building     |
| **Authorization**  | Determines what an authenticated user can access | Your ID only lets you enter certain floors |

> 🔁 You **authenticate** first, then the system checks what you are **authorized** to do.

---

## 🧰 Common Authentication Methods in APIs

### 🔹 1. API Keys

- **What it is:** A static token (unique string) that identifies the application.
- **Usage:**  
  - In headers: `X-API-Key: YOUR_API_KEY`  
  - In URL: `?api_key=YOUR_API_KEY` (less secure)
- **Pros:** Simple and widely supported.
- **Cons:** Can be stolen and misused; not tied to individual users.
- **Best For:** Identifying apps, public data access, simple rate limiting.

---

### 🔹 2. Token-Based Authentication (Bearer Tokens / OAuth 2.0)

- **What it is:** A secure token obtained after user login or application authentication.
- **How it works:**
  1. Authenticate with an **authorization server**
  2. Receive an **access token**
  3. Send API requests with the token:  
     `Authorization: Bearer YOUR_ACCESS_TOKEN`
- **Pros:** Short-lived, revocable, user-specific, scalable
- **Cons:** Slightly more complex to implement
- **Best For:** Securing user data, OAuth workflows (e.g., Google login)

---

### 🔹 3. Basic Authentication (Mention Only)

- **What it is:** Sends username and password encoded in Base64 with each request.
- **Usage:** `Authorization: Basic Base64(username:password)`
- **Pros:** Easy to implement
- **Cons:** Not secure unless used over HTTPS; credentials sent on every request
- **Best For:** Internal tools or non-critical systems over secure networks

---

## 🔐 Summary Table

| Method             | Security | Best For                             | Header Format                         |
|--------------------|----------|--------------------------------------|---------------------------------------|
| API Key            | Moderate | App-level access, public APIs        | `X-API-Key: YOUR_API_KEY`             |
| Bearer Token (OAuth)| High     | User-level access, secure data flows | `Authorization: Bearer ACCESS_TOKEN`  |
| Basic Auth         | Low      | Internal use over HTTPS              | `Authorization: Basic BASE64_ENCODED` |

---

## 📚 Additional Resources

- 🌐 [OAuth 2.0 Overview](https://oauth.net/2/)
- 🔐 [OWASP API Security Guide](https://owasp.org/www-project-api-security/)
- 📘 [API Key vs OAuth Explained](https://www.freecodecamp.org/news/api-keys-vs-oauth-2/)

---

> 🧠 Understanding API authentication is essential for protecting users, data, and infrastructure.

