> **Base URL:** `https://localhost:3000/api/v1`

## 1. Authentication & Authorization

| Method | Endpoint                   | Auth   | Request Body / Query             | Success Response                             | Notes                    |
| ------ | -------------------------- | ------ | -------------------------------- | -------------------------------------------- | ------------------------ |
| POST   | `/auth/register`           | Public | `{ email, full_name, password }` | `201 Created` + `{ user_id }`                | kirim email verifikasi   |
| GET    | `/auth/verify?token={tok}` | Public | —                                | `200 OK`                                     | aktifkan akun            |
| POST   | `/auth/login`              | Public | `{ email, password }`            | `200 OK` + `{ access_token, refresh_token }` | JWT Bearer               |
| POST   | `/auth/refresh`            | Public | `{ refresh_token }`              | `200 OK` + `{ access_token }`                |                          |
| POST   | `/auth/logout`             | Bearer | `{ }`                            | `204 No Content`                             | invalidasi refresh token |

## 2. Users & Roles (RBAC)

| Method | Endpoint      | Auth (Role)        | Request Body / Query                   | Success Response         | Notes                         |
| ------ | ------------- | ------------------ | -------------------------------------- | ------------------------ | ----------------------------- |
| GET    | `/users/me`   | Bearer             | —                                      | `200 OK` + `{ user }`    | profil sendiri                |
| PUT    | `/users/me`   | Bearer             | `{ full_name, password? }`             | `200 OK`                 | update password/ nama         |
| GET    | `/users`      | Bearer (sys_admin) | `?page=&limit=&role=`                  | `200 OK` + `{ users[] }` | list semua user               |
| GET    | `/users/{id}` | Bearer (sys_admin) | —                                      | `200 OK` + `{ user }`    | detail user                   |
| PUT    | `/users/{id}` | Bearer (sys_admin) | `{ full_name?, is_active?, roles?[] }` | `200 OK`                 | aktif/non-aktif, ubah role    |
| DELETE | `/users/{id}` | Bearer (sys_admin) | —                                      | `204 No Content`         | soft-delete (is_active=false) |

## 3. Articles & Workflow

| Method | Endpoint                   | Auth (Role)                          | Body / Query                                                       | Success Response             | Notes                               |
| ------ | -------------------------- | ------------------------------------ | ------------------------------------------------------------------ | ---------------------------- | ----------------------------------- |
| GET    | `/articles`                | Public                               | `?page=&limit=&category=&tag=&search=&sort=[latest                 | popular]`                    | `200 OK` + `{ articles[] }`         |
| GET    | `/articles/{id}`           | Public                               | —                                                                  | `200 OK` + `{ article }`     | increment view, record in analytics |
| POST   | `/articles`                | Bearer (author)                      | `{ title, summary, content, media_ids?[], categories[] , tags[] }` | `201 Created` + `{ id }`     | status=draft                        |
| PUT    | `/articles/{id}`           | Bearer (author, own & status=draft)` | `{ title?, summary?, content?, media_ids?, categories?, tags? }`   | `200 OK`                     | ubah draft                          |
| POST   | `/articles/{id}/submit`    | Bearer (author, own & status=draft)` | —                                                                  | `200 OK`                     | status→in_review, set submitted_at  |
| GET    | `/articles/drafts`         | Bearer (author)                      | `?page=&limit=`                                                    | `200 OK` + `{ drafts[] }`    | draft & needs_revision              |
| GET    | `/articles/review`         | Bearer (editor)                      | `?page=&limit=`                                                    | `200 OK` + `{ in_review[] }` | antrean review                      |
| POST   | `/articles/{id}/approve`   | Bearer (editor)                      | —                                                                  | `200 OK`                     | status→published, published_at set  |
| POST   | `/articles/{id}/reject`    | Bearer (editor)                      | `{ comment }`                                                      | `200 OK`                     | status→rejected + simpan comment    |
| GET    | `/articles/{id}/revisions` | Bearer (editor, author)              | —                                                                  | `200 OK` + `{ revisions[] }` | history status change               |

## 4. Categories & Tags

| Method | Endpoint           | Auth (Role)        | Body / Query       | Success Response        | Notes                      |
| ------ | ------------------ | ------------------ | ------------------ | ----------------------- | -------------------------- |
| GET    | `/categories`      | Public             | —                  | `200 OK` + `{ cats[] }` |                            |
| POST   | `/categories`      | Bearer (sys_admin) | `{ name, slug }`   | `201 Created`           |                            |
| PUT    | `/categories/{id}` | Bearer (sys_admin) | `{ name?, slug? }` | `200 OK`                |                            |
| DELETE | `/categories/{id}` | Bearer (sys_admin) | —                  | `204 No Content`        | cascade article_categories |
| GET    | `/tags`            | Public             | —                  | `200 OK` + `{ tags[] }` |                            |
| POST   | `/tags`            | Bearer (sys_admin) | `{ name, slug }`   | `201 Created`           |                            |
| PUT    | `/tags/{id}`       | Bearer (sys_admin) | `{ name?, slug? }` | `200 OK`                |                            |
| DELETE | `/tags/{id}`       | Bearer (sys_admin) | —                  | `204 No Content`        | cascade article_tags       |

## 5. Comments & Likes

| Method | Endpoint                   | Auth (Role)     | Body / Query                    | Success Response            | Notes                   |
| ------ | -------------------------- | --------------- | ------------------------------- | --------------------------- | ----------------------- |
| GET    | `/articles/{aid}/comments` | Public          | `?page=&limit=&status=approved` | `200 OK` + `{ comments[] }` | nested replies included |
| POST   | `/articles/{aid}/comments` | Bearer (user)   | `{ content }`                   | `201 Created`               | status=pending          |
| POST   | `/comments/{cid}/approve`  | Bearer (editor) | —                               | `200 OK`                    | status→approved         |
| POST   | `/comments/{cid}/reject`   | Bearer (editor) | `{ reason }`                    | `200 OK`                    | status→rejected         |
| POST   | `/articles/{aid}/likes`    | Bearer (user)   | —                               | `201 Created`               | if exists 409 Conflict  |
| DELETE | `/articles/{aid}/likes`    | Bearer (user)   | —                               | `204 No Content`            | unlike                  |
| POST   | `/comments/{cid}/likes`    | Bearer (user)   | —                               | `201 Created`               |                         |
| DELETE | `/comments/{cid}/likes`    | Bearer (user)   | —                               | `204 No Content`            |                         |

## 6. Media Upload

| Method | Endpoint      | Auth (Role)     | Body (multipart/form-data) | Success Response                    | Notes                |
| ------ | ------------- | --------------- | -------------------------- | ----------------------------------- | -------------------- |
| POST   | `/media`      | Bearer (author) | `file: image/*, video/*`   | `201 Created` + `{ media_id, url }` | S3/local storage     |
| GET    | `/media/{id}` | Public          | —                          | `200 OK` + Binary stream            | serve via CDN if ada |

## 7. Analytics & Reports

| Method | Endpoint                | Auth (Role)                | Query                 | Success Response         | Notes                           |
| ------ | ----------------------- | -------------------------- | --------------------- | ------------------------ | ------------------------------- |
| GET    | `/analytics/articles`   | Bearer (editor, sys_admin) | `?from=&to=&by=[daily | weekly                   | monthly]&category=&author_id=`  |
| GET    | `/analytics/categories` | Bearer (editor, sys_admin) | `?from=&to=&by=`      | `200 OK` + `{ stats[] }` | per kategori                    |
| GET    | `/analytics/users`      | Bearer (sys_admin)         | `?from=&to=&role=`    | `200 OK` + `{ stats[] }` | new registrations, active users |

### **Header & Error Handling**

- **Header**

  ```http
  Authorization: Bearer <access_token>
  Content-Type: application/json
  ```

- **Error Response** (contoh)

  ```json
  {
    "status": "error",
    "message": "Invalid credentials",
    "code": 401
  }
  ```

- **Standar Status Code**

  - `200 OK`, `201 Created`, `204 No Content`

  - `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `500 Internal Server Error`
