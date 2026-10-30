Task-1: How the Web Works

1. Web Architecture Overview
- **Client**: Initiates requests via user agents (browsers/apps) and parses returned data.
- **Server**: Receives incoming requests, validates input, handles routing, executes business logic, and returns formatted responses.
- **API (Application Programming Interface)**: Acts as the contract/communication layer between systems.
- **Database**: Persistent storage queried by the server to read, insert, update, or remove application records.

2. Network Fundamentals
- **DNS (Domain Name System)**: Maps human-readable URLs to machine IP addresses through recursive resolvers, root servers, TLD servers, and authoritative nameservers.
- **IP & Ports**: IP addresses specify machine network locations; ports specify which target process/service listens to incoming connections (e.g., Port 80 for HTTP, Port 443 for HTTPS).
- **HTTP/HTTPS**: HTTPS secures standard HTTP transport via TLS/SSL encryption handshakes.
- **HTTP Methods**: `GET` (fetch), `POST` (create), `PUT`/`PATCH` (update), `DELETE` (remove).
- **Status Codes**:

- Few Exs
  - `200 OK` / `201 Created`
  - `400 Bad Request` / `401 Unauthorized` / `404 Not Found`
  - `500 Internal Server Error`

---

 3. Mini-Activity: Network Tab Inspection

Using Chrome DevTools (Network tab) to inspect request and response lifecycles:

| Request URL | Method | Status Code | Request Payload | Response Data |
| :--- | :--- | :--- | :--- | :--- |
| `https://api.github.com/users/RTSSReddy` | `GET` | `200 OK` | None | JSON object with user profile metadata |
| `https://httpbin.org/post` | `POST` | `200 OK` | `{"action": "test", "domain": "IEEE"}` | JSON echoing back sent headers and data payload |
| `https://api.github.com/events` | `GET` | `200 OK` | None | Array of public event payloads |

### Observations:
- Inspected request headers (`User-Agent`, `Accept: application/json`) and response headers (`Content-Type`, `Cache-Control`).
- Monitored response payload decoding and the network waterfall (DNS lookup, TCP connect, SSL, TTFB).
