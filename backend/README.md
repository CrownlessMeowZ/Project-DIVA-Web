# Backend Plan — Project DIVA Web (Java Spring Boot)

## Stack
- Runtime: Java 17 or 21
- Framework: Spring Boot 3.x
- Database: PostgreSQL + Spring Data JPA (Hibernate)
- Auth: Spring Security + JWT (Refresh Token Rotation) + Steam OpenID Integration
- File uploads: Spring Boot MultipartFile + local storage (dev only) / Cloud
- Validation: Jakarta Bean Validation (Spring Boot Starter Validation)
- Build Tool: Maven (or Gradle)
- CORS: Configured for Vite dev origin + production domain

## Folder Structure
backend/
├── pom.xml
├── src/
│   └── main/
│       ├── java/com/projectdiva/
│       │   ├── ProjectDivaApplication.java
│       │   ├── config/        # CORS, OpenAPI, Async Config
│       │   ├── controller/    # REST APIs (auth, posts, leaderboard...)
│       │   ├── dto/           # Request/Response objects
│       │   ├── entity/        # JPA Entities (User, Post, Score...)
│       │   ├── exception/     # GlobalExceptionHandler (@ControllerAdvice)
│       │   ├── repository/    # Spring Data JPA Interfaces
│       │   ├── security/      # JWT filter, Steam OpenID logic
│       │   └── service/       # Business logic
│       └── resources/
│           ├── application.yml
│           └── static/
├── .gitignore
└── README.md

## API Endpoints
- POST /api/auth/steam/login → Redirect to Steam OpenID
- GET  /api/auth/steam/callback → Returns access + refresh JWT
- POST /api/auth/refresh → Refresh token rotation
- GET  /api/me (protected)
- PUT  /api/me (profile update)
- GET  /api/posts (cursor-based pagination)
- POST /api/posts (auth, multipart for image)
- GET  /api/posts/:id
- POST /api/posts/:id/comments
- GET  /api/leaderboard?songId=&difficulty=
- POST /api/scores/upload (auth, parse local save file)

## Data Models (JPA Entities)
- User: id, steamId (for OpenID), username, avatar, role, joinedAt
- Post: id, user_id (ManyToOne), content, imageUrl, createdAt
- Comment: id, post_id (ManyToOne), user_id (ManyToOne), text, createdAt
- Score: id, user_id (ManyToOne), songTitle, score, difficulty, clearRank, date

## Security Notes
- Refresh token rotation: invalidate old token on each refresh
- Global exception handler via @ControllerAdvice for uniform JSON error responses
- Validate all input with Jakarta Bean Validation + sanitize on client
- Store uploaded images with UUID keys, never trust client filenames
- Rate limit auth and post creation endpoints
- Cursor-based pagination for feed (not offset) for performance at scale

## Local environment (secrets)

- Create a local `.env` in the `backend` folder for secret values (DO NOT commit it).
- Example file included as `backend/.env.example` — copy it to `backend/.env` and fill values.
- Recommended variable:

```
GROQ_API_KEY=your_real_groq_api_key_here
```

- Ensure `backend/.env` is ignored by Git (the project `.gitignore` already contains `.env`).

