# Elementum (Docker-Only Setup)

This project is configured to be built and run using Docker only.

## Deployment

Use Docker Compose on any machine or server with Docker installed.

### 1. Build and run

```bash
docker compose up --build -d
```

### 2. Open the app

Visit:

```text
http://localhost:8080
```

### 3. Stop the app

```bash
docker compose down
```

### Optional: single-image Docker run

```bash
docker build -t elementum-app .
docker run --rm -p 8080:80 elementum-app
```

## Requirements

- Docker Desktop (or Docker Engine + Compose)

## Run With Docker Compose

```bash
docker compose up --build
```

App will be available at:

- http://localhost:8080

## Run With Docker (without Compose)

```bash
docker build -t elementum-app .
docker run --rm -p 8080:80 elementum-app
```

## Stop Containers

```bash
docker compose down
```

## Notes

- Multi-stage Docker build is used for a smaller production image.
- Nginx serves the Vite build output from `dist`.
- SPA routing is supported with `try_files ... /index.html` in `nginx.conf`.
