
# Module 2: The Client-Server Model & Web Basics

> **Goal:** To understand the fundamental communication architecture that underlies most API interactions on the web.

---

## 2.1 The Client-Server Architecture



<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%202/assets/api.gif" alt="Banner" />







Most of the internet and API interactions operate on a **client-server model**. This is a distributed architecture where:

### 🔹 Client
A client is a piece of hardware or software that **requests a service or data** from a server.

**Examples:**
- A web browser (Chrome, Firefox)
- A mobile app (Android or iOS)
- A desktop application
- Another server (e.g., in microservices)

### 🔹 Server
A server is a piece of hardware or software that **provides a service or data** to a client. It "serves" the requests.

**Examples:**
- A web server hosting a website
- A database server storing information
- An API server providing services like weather, authentication, etc.

---

### 🔁 The Communication Flow

1. **Request:** The client initiates communication by sending a request to the server.
2. **Processing:** The server receives the request, processes it (e.g., fetches data, computes a result).
3. **Response:** The server sends a response back to the client — either with the requested data or an error.

```

+--------------+                    +--------------+
\|    Client    |                    |    Server    |
+--------------+                    +--------------+
\|                                    ^
\| Request (e.g., "Give me user data")|
\|------------------------------------>
\|                                    |
\| Response (e.g., "Here's user data")|
|<------------------------------------
v                                    |

```

---

## 2.2 Brief Introduction to the Web's Communication Protocol

The internet is a vast network, and communication between clients and servers needs a **common language**. For web APIs, this language is **HTTP**.

---

### 2.2.1 HTTP (Hypertext Transfer Protocol)

- HTTP is the **foundation of communication** on the World Wide Web.
- It's the **protocol used to send/receive** information between a client (like a browser or app) and a web server.

**Example:**
When you type a URL into your browser, you're sending an HTTP request.

#### 🔒 HTTPS (HTTP Secure)

- The **secure version of HTTP**.
- Uses **SSL/TLS encryption** to protect transmitted data.
- Essential for sensitive info like passwords and payments.
- Most modern APIs use HTTPS exclusively.

---

### 2.2.2 URLs (Uniform Resource Locators)

A URL is the **address of a resource** on the internet. It tells the browser (or any client) where to find what it needs.

**Typical URL Structure:**

```

scheme://host\:port/path?query#fragment

```

**Components:**

- **scheme:** The protocol (e.g., `http://`, `https://`)
- **host:** The domain or IP address (e.g., `www.example.com`, `api.github.com`)
- **port (optional):** Port number (default: 80 for HTTP, 443 for HTTPS)
- **path:** Resource path (e.g., `/users`, `/products/123`)
- **query (optional):** Parameters (e.g., `?name=Alice&age=30`)
- **fragment (optional):** Section within the resource (used in browsers)

---

### 2.2.3 DNS (Domain Name System - Simplified)

You remember `google.com`, not `172.217.160.142`.

- DNS is like the **internet’s phonebook**.
- When you enter a domain (e.g., `api.example.com`), your system contacts a DNS server.
- The DNS resolves it into an **IP address** (e.g., `192.0.2.1`) to locate the correct server.

---

## 2.3 Practical Exercise: Observe Network Requests in Your Browser

This exercise helps visualize the **client-server communication** in real-time.

### 🧪 Steps:

1. Open your web browser (Chrome, Firefox, Edge).
2. Visit a website (e.g., [https://www.google.com](https://www.google.com)).
3. Open Developer Tools:
   - **Windows/Linux:** Press `F12` or `Ctrl+Shift+I`
   - **macOS:** Press `Cmd+Option+I`
4. Go to the **"Network" tab**.
5. **Refresh** the page.

### 🔍 Observe:

You’ll see a list of network requests your browser makes to various servers to load content like HTML, CSS, JavaScript, and images.

- **Click on a request** to inspect details:
  - **Headers:** Request and response headers
  - **Payload/Request Body:** Data sent (if any)
  - **Response:** The server’s reply

- **Filter:** Use filters like `XHR` or `Fetch` to isolate **API-like calls** (AJAX requests).

---

### 🎯 Key Takeaway:

Your browser is a **client constantly making requests** to servers and receiving responses.

> **APIs work the same way** — clients send structured requests and get structured responses in return (typically JSON or XML).

---




