# Module 4: Understanding API Responses

## Goal

To interpret the feedback from an API, including status codes and data formats.

Once a client sends a request, the server processes it and sends back a response. This response is composed of several critical parts that tell the client what happened and provide any requested data.

---

## 4.1 HTTP Status Codes (The Server's Feedback)

HTTP status codes are three-digit numbers returned by the server in the response header. They tell the client the outcome of its request. They are grouped into five classes:


<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%204/assets/api.png" alt="Banner" />


### 1xx - Informational

The request was received and understood. (Less common in typical API interactions)

* **100 Continue**: The client should continue with its request.

### 2xx - Success

The action was successfully received, understood, and accepted.

* **200 OK**: The request has succeeded. This is the most common successful response.
* **201 Created**: The request has succeeded and a new resource has been created as a result. Typically returned after a POST request.
* **204 No Content**: The server successfully processed the request, but is not returning any content. Often used for DELETE or PUT requests.

### 3xx - Redirection

Further action needs to be taken by the client to complete the request.

* **301 Moved Permanently**: The resource has been permanently moved to a new URL.
* **302 Found**: The resource is temporarily located under a different URI.

### 4xx - Client Error

The request contains bad syntax or cannot be fulfilled. The client is usually at fault.

* **400 Bad Request**: The server cannot process the request due to a client error.
* **401 Unauthorized**: Authentication is required and has failed or has not been provided.
* **403 Forbidden**: The client is authenticated but does not have permission to access the resource.
* **404 Not Found**: The server cannot find the requested resource.
* **405 Method Not Allowed**: The HTTP method used is not supported for the requested resource.
* **429 Too Many Requests**: The user has sent too many requests in a given amount of time.

### 5xx - Server Error

The server failed to fulfill a valid request.

* **500 Internal Server Error**: A generic error when an unexpected condition was encountered.
* **503 Service Unavailable**: The server is currently unable to handle the request.

---

## 4.2 Data Formats in API Responses (Focus on JSON)

The data returned by an API in its response body is typically structured in a specific format. JSON is overwhelmingly the most common format.

### 4.2.1 JSON (JavaScript Object Notation)

**What it is:** A lightweight data-interchange format that is human-readable and machine-parsable.

**Key Characteristics:**

* **Key-Value Pairs:** Example: `"name": "Alice"`
* **Objects:** `{ "name": "Bob", "age": 30 }`
* **Arrays:** `[
  "apple",
  "banana",
  "cherry"
  ]`
* **Data Types:** Strings, numbers, booleans, null, objects, arrays.

**Why JSON is Popular:**

* Readable and concise
* Easy to parse
* Supported by most programming languages

**Example JSON Response:**

```json
{
  "id": 101,
  "title": "Introduction to APIs",
  "author": {
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com"
  },
  "tags": ["API", "Web", "Programming"],
  "published": true,
  "comments": [
    {
      "id": 1,
      "user": "Alice",
      "text": "Great explanation!"
    },
    {
      "id": 2,
      "user": "Bob",
      "text": "Very clear, thanks."
    }
  ],
  "relatedArticles": null
}
```

### 4.2.2 XML (Extensible Markup Language)

**Note:** Historically used in SOAP APIs. Uses tags and attributes like HTML. JSON is now more widely used.

---

## 4.3 Parsing JSON: Extracting Information

Once a JSON response is received, it must be parsed to be useful in a client application.

**Examples from the above JSON:**

* Title: `response.title` or `response['title']`
* Author First Name: `response.author.firstName` or `response['author']['firstName']`
* First Tag: `response.tags[0]`
* Second Comment Text: `response.comments[1].text`

---

## 4.4 Response Headers

Metadata about the response. Common headers include:

* **Content-Type**: Format of the response body (e.g., `application/json`).
* **Date**: When the response was generated.
* **Server**: Info about the server software.
* **Access-Control-Allow-Origin**: For CORS.
* **Set-Cookie**: Sets cookies on the client.
* **Cache-Control**: Caching rules.

