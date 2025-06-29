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
