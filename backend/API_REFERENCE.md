# User API Reference

This document describes the available endpoints for user-related operations.

## Base URL

`/api/user`

---

## Endpoints

### 1. Register a New User

- **URL:** `/api/user/signup`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourPassword",
    "isDesigner": true
  }
  ```
- **Response:**
  - **201 Created** on success with user data and token:
    ```json
    {
    "user": {
        "id": "60f8c0a2b4d1c20017a4e8e3",
        "name": "John Doe",
        "email": "john@example.com",
        "date_joined": "2025-06-16T12:34:56.789Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
  - **400 Bad Request** if user already exists or validation fails:

    ```json
    {
      "error": "User already exists"
    }
    ```
  - or
    ```json
    {
      "errors": [
        { "field": "email", "message": "Invalid email format" },
        { "field": "password", "message": "Password must be at least 6 characters" }
      ]
    }
    ```
### 2. User Login
- **URL:** `/api/user/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a token.
- **Request Body:**

  ```json
  {
    "email": "john@example.com",
    "password": "yourPassword"
  }
  ```
- **Response:**

  - **200 OK** with user data and token:
    ```json
    {
      "user": {
        "id": "60f8c0a2b4d1c20017a4e8e3",
        "name": "John Doe",
        "email": "john@example.com",
        "date_joined": "2025-06-16T12:34:56.789Z"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
  - **401 Unauthorized** if credentials are invalid:
    ```json
    {
      "error": "Invalid email or password"
    }
    ```

### 2. Get Designers
- **URL:** `/api/user/getDesigners`
- **Method:** `GET`
- **Description:** Get a list of designers.

- **Response:**

  - **200 OK** with user data and token:
    ```json
    [
      {
        "_id": "68500b54d1a5e2a3aa7da23e",
        "email": "me@app.com",
        "createdAt": "2025-06-16T12:17:24.285Z",
        "updatedAt": "2025-06-16T12:17:24.285Z",
        "__v": 0,
        "isDesigner": true
      },
      {
        "_id": "685697482354fda342090761",
        "email": "admin@app.com",
        "createdAt": "2025-06-16T12:17:24.285Z",
        "updatedAt": "2025-06-16T12:17:24.285Z",
        "__v": 0,
        "isDesigner": true
      }
    ]
    ```


### Notes
- All endpoints that require authentication expect a valid JWT token in the `Authorization` header.

- Admin-only routes require the authenticated user to have admin privileges.

- Timestamps (e.g., `date_joined`) are in ISO 8601 format.