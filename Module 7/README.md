# Module 7: Different Types of APIs (Architectural Styles & Protocols)

**Goal:** Understand the major architectural styles and protocols used for building APIs, their core characteristics, pros/cons, and typical use cases.

<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%207/assets/architecture.png" alt="Banner" />

---

## 7.1 The Spectrum of API Types

Key API types:

1. **RPC / gRPC** – Remote function call style.
2. **SOAP** – XML-based protocol with strict contract.
3. **REST** – Resource-oriented web APIs.
4. **GraphQL** – Query language for APIs.

---

## 7.2 RPC (Remote Procedure Call)

### What It Is

Client calls remote server functions as if local. gRPC is a modern variant.

### Key Characteristics

* Function-centric
* Tight client-server coupling
* Multiple transport and data formats

### gRPC Highlights

* Uses HTTP/2
* Protobuf for schema and data
* Supports streaming
* Auto code generation

### Advantages

* High performance (HTTP/2 + Protobuf)
* Strong typing
* Real-time support (streaming)

### Disadvantages

* Tight coupling
* Less human-readable
* Limited browser support
* Learning curve

### Use Cases

* Microservices communication
* Real-time apps
* High-performance data transfer

---

## 7.3 SOAP (Simple Object Access Protocol)
<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%207/assets/soap.png" alt="Banner" />

### What It Is

A protocol for XML-based message exchange using WSDL contracts.

### Key Characteristics

* XML-based
* Uses WSDL for schema
* Transport-agnostic (HTTP, SMTP, etc.)
* Built-in error handling and security

### Advantages

* High interoperability
* Message-level security
* Strict typing
* Complex transaction support

### Disadvantages

* Verbose and complex
* Slower due to XML
* Tooling dependent

### Use Cases

* Legacy enterprise systems
* High-security integrations
* B2B services

---

## 7.4 REST (Representational State Transfer)


<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%207/assets/rest.png" alt="Banner" />

### What It Is

Architectural style using HTTP methods for resource management.

### Key Characteristics

* Resource-oriented
* Stateless
* Uses HTTP methods (GET, POST, etc.)
* Supports caching

### Advantages

* Simple and widely adopted
* Lightweight (JSON)
* Scalable and flexible
* Broad tool support

### Disadvantages

* Over/under-fetching
* No strict schema/contract
* Complex versioning
* Less built-in security

### Use Cases

* Public APIs
* Mobile apps
* SPAs
* Microservices

---

## 7.5 GraphQL



<img src="https://github.com/bhuvan-raj/API-From-Scratch/blob/main/Module%207/assets/graphql.png" alt="Banner" />



### What It Is

Query language and runtime for APIs. One endpoint, flexible queries.

### Key Characteristics

* Declarative queries
* Strongly typed schema
* Supports queries, mutations, subscriptions
* No over/under-fetching

### Advantages

* Tailored responses
* Rapid frontend iteration
* Versionless
* Schema-based introspection

### Disadvantages

* Backend complexity
* Cache/rate limiting challenges
* Learning curve

### Use Cases

* Mobile & complex UIs
* API aggregation
* Microservices API gateway

---

## 7.6 Comparison Table

| Feature     | REST                | SOAP              | GraphQL           | gRPC                     |
| ----------- | ------------------- | ----------------- | ----------------- | ------------------------ |
| Type        | Architectural style | Protocol          | Query language    | RPC framework            |
| Transport   | HTTP                | HTTP, SMTP, etc.  | HTTP (POST)       | HTTP/2                   |
| Format      | JSON                | XML               | JSON              | Protobuf (binary)        |
| Performance | Good                | Low (XML)         | Good              | High (HTTP/2, Protobuf)  |
| Typing      | Loose               | Strong (WSDL)     | Strong (schema)   | Strong (Protobuf)        |
| Tooling     | Simple              | Heavy             | Rich tooling      | Requires setup           |
| Best For    | Web/Mobile APIs     | Enterprise legacy | Dynamic UIs, SPAs | Microservices, real-time |

---

## 7.7 Choosing the Right API Type

| Use Case                       | Best API Type |
| ------------------------------ | ------------- |
| Public Web APIs                | REST          |
| Complex B2B/Enterprise         | SOAP          |
| Dynamic Data for Frontend Apps | GraphQL       |
| Real-time, High-Speed Services | gRPC          |

---

## 7.8 HTTP API vs. REST API

* **HTTP API**: Any API over HTTP.
* **REST API**: HTTP API following REST principles.

All REST APIs are HTTP APIs, but not all HTTP APIs are RESTful.

---

## 7.9 Real-World Usage Patterns

* REST for frontend/mobile/public.
* gRPC for backend microservices.
* GraphQL for client-facing API gateways.
* SOAP for legacy enterprise integrations.

---

> Understanding these API types helps you choose the right architecture for your application or system.

---


## API Frameworks & Libraries

API frameworks provide the tools and structure to build and expose APIs in various programming languages. Here are some of the most widely used:

### 🔹 Python

| Framework       | Type | Highlights                                         |
| --------------- | ---- | -------------------------------------------------- |
| **FastAPI**     | REST | Async, fast, modern; based on Starlette & Pydantic |
| **Flask**       | REST | Lightweight, great for small apps and prototyping  |
| **Django REST** | REST | Powerful extension to Django for building APIs     |

---

### 🔹 JavaScript / TypeScript

| Framework      | Type                  | Highlights                                             |
| -------------- | --------------------- | ------------------------------------------------------ |
| **Express.js** | REST                  | Minimal and flexible, most popular for Node.js         |
| **NestJS**     | REST / gRPC / GraphQL | Modular, TypeScript-first, supports multiple API types |

---

### 🔹 Java

| Framework       | Type        | Highlights                                         |
| --------------- | ----------- | -------------------------------------------------- |
| **Spring Boot** | REST / SOAP | Enterprise-level, widely used in backend Java apps |

---

### 🔹 .NET / C\#

| Framework           | Type        | Highlights                                   |
| ------------------- | ----------- | -------------------------------------------- |
| **ASP.NET Web API** | REST / SOAP | Rich tooling, fast, full Microsoft ecosystem |

---

### 🔹 GraphQL Specific

| Tool / Framework  | Language      | Highlights                                  |
| ----------------- | ------------- | ------------------------------------------- |
| **Apollo Server** | JavaScript    | GraphQL server for Node.js                  |
| **Hasura**        | SQL + GraphQL | Auto-generates GraphQL APIs from PostgreSQL |

---

### 🔹 gRPC (Cross-language)

| Tool     | Language Support           | Highlights                                     |
| -------- | -------------------------- | ---------------------------------------------- |
| **gRPC** | Go, Java, Python, C++, etc | Based on Protobuf, high-performance, streaming |

---

##  API Styles & Standards

Beyond frameworks, these **styles and specs** define how APIs are structured, consumed, or documented.

### 🔸 OpenAPI (Swagger)

* **Purpose:** API documentation & client code generation
* **Description:** YAML/JSON specification for RESTful APIs
* **Use:** Swagger UI, Postman import, SDK generation

---

### 🔸 JSON\:API

* **Purpose:** Standardized JSON format for REST APIs
* **Description:** Reduces custom formats, supports pagination, filtering, etc.
* **Use:** Data-focused APIs, frontends with structured clients

---

### 🔸 OData (Open Data Protocol)

* **Purpose:** Standard for querying REST APIs
* **Description:** Supports filtering, sorting, pagination via URL
* **Use:** Often in Microsoft ecosystems (e.g., Power BI, Dynamics)

---

### 🔸 HATEOAS (Hypermedia as the Engine of Application State)

* **Purpose:** Advanced REST constraint
* **Description:** Clients navigate API via hyperlinks provided in responses
* **Use:** Fully RESTful APIs, hypermedia-driven UIs

---

### 🔸 Webhooks

* **Purpose:** Event-driven callback mechanism
* **Description:** API sends a request to your server when an event happens
* **Use:** Stripe (payment events), GitHub (push events), CI/CD triggers

---

## 🔚 Summary Table

| Category     | Tool/Style       | API Type    | Use Case                                   |
| ------------ | ---------------- | ----------- | ------------------------------------------ |
| Framework    | FastAPI, Express | REST        | Web/mobile APIs                            |
| Framework    | Apollo, Hasura   | GraphQL     | Flexible frontends, dashboards             |
| Framework    | gRPC             | RPC         | Microservices, real-time, high-speed comms |
| Spec / Style | OpenAPI, Swagger | REST        | Documentation, SDK generation              |
| Spec / Style | JSON\:API        | REST        | Standardized JSON API responses            |
| Protocol     | OData            | REST        | Advanced querying, Microsoft stack         |
| Style        | HATEOAS          | REST        | Hypermedia-driven navigation               |
| Mechanism    | Webhooks         | Event-based | Notify on server events                    |


