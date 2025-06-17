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
    "password": "yourPassword"
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

### 3. Get Current User Profile
- **URL:** `/api/user/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the authenticated user.
- **Headers:**
  - Authorization: Bearer <token>
- **Response:**
  - **200 OK** with user profile data:
    ```json
    {
      "id": "60f8c0a2b4d1c20017a4e8e3",
      "name": "John Doe",
      "email": "john@example.com",
      "date_joined": "2025-06-16T12:34:56.789Z"
    }
    ```
  - **401 Unauthorized** if token is missing or invalid:
    ```json
    {
      "error": "Authentication required"
    }
    ```

### 4. Update User Profile
- **URL:** `/api/user/profile`
- **Method:** `PUT`
- **Description:** Updates the authenticated user's profile.
- **Headers:**
  ```makefile
  Authorization: Bearer <token>
  ```
- **Request Body (any combination of fields):**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "newPassword"
  }
  ```
- **Response:**
  - **200 OK** with updated user data:
    ```json
    {
      "id": "60f8c0a2b4d1c20017a4e8e3",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "date_joined": "2025-06-16T12:34:56.789Z"
    }
    ```
  - **400 Bad Request** if validation fails:
    ```json
    {
      "errors": [
        { "field": "email", "message": "Email already in use" }
      ]
    }
    ```
  - **401 Unauthorized** if token is missing or invalid:
    ```json
    {
      "error": "Authentication required"
    }
    ```
### 5. Get All Users (Admin Only)
- **URL:** `/api/user`
- **Method:** `GET`
- **Description:** Retrieves a list of all users. Admin access required.

- **Headers:**
  ```makefile
  Authorization: Bearer <admin-token>
  ```

- **Response:**

  - **200 OK** with array of user objects:
    ```json
    [
      {
        "id": "60f8c0a2b4d1c20017a4e8e3",
        "name": "John Doe",
        "email": "john@example.com",
        "date_joined": "2025-06-16T12:34:56.789Z"
      },
      {
        "id": "60f8c1b3c5d2f30028b5f9f4",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "date_joined": "2025-05-10T09:20:30.123Z"
      }
    ]```

  - **401 Unauthorized** if not admin:
    ```json
    {
      "error": "Admin access required"
    }
    ```
### 6. Delete a User (Admin Only)
- **URL:** `/api/user/:id`
- **Method:** `DELETE`
- **Description:** Deletes a user by ID. Admin access required.

- **Headers:**
  ```makefile
  Authorization: Bearer <admin-token>
  ```

- **Response:**

  - **200 OK** on successful deletion:
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

  - **404 Not Found** if user does not exist:
    ```json
    {
      "error": "User not found"
    }
    ```

  - **401 Unauthorized** if not admin:
    ```json
    {
      "error": "Admin access required"
    }
    ```

### Error Responses
- **400 Bad Request:** Invalid input or missing fields.
  ```json
  {
    "error": "Bad Request",
    "message": "Description of the validation error"
  }
  ```

- **401 Unauthorized:** Authentication failed or missing token.
  ```json
  {
    "error": "Unauthorized",
    "message": "Authentication required"
  }
  ```

- **404 Not Found:** Resource not found.
  ```json
  {
    "error": "Not Found",
    "message": "Resource not found"
  }
  ```

### Notes
- All endpoints that require authentication expect a valid JWT token in the `Authorization` header.

- Admin-only routes require the authenticated user to have admin privileges.

- Timestamps (e.g., `date_joined`) are in ISO 8601 format.