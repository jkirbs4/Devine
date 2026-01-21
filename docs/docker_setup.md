
# **Docker Setup**

### **Installation Steps**
1. Download the Docker Desktop application from the [Docker website](https://www.docker.com/products/docker-desktop/) by selecting the correct configuration for your machine.
2. Create a Docker account, verify your email, then sign into your account on the desktop application.
3. Navigate to the frontend folder with `cd src/frontend`.
4. Create a file named `Dockerfile` and place it in `src/frontend`.
5. Create a file named `compose.yml` and also place it in `src/frontend`.
6. See the "Significant Files" section below and learn how to construct the `Dockerfile` and `compose.yml` file.
7. Run `docker compose up --build` to construct an image from the `Dockerfile`, `package.json`, and `package-lock.json`. This command will also start the container from the image. The local and network addresses should appear to `ctrl+click` to open the website in your browser. Select the local address, which should be `http://localhost:5173` since it is running on your machine on port 5173.

---

### **Main Commands**
- `docker compose up` starts a docker container from an image. Add the `--build` flag to recreate the image. It is only necessary to recreate the image when `Dockerfile`, `package.json`, or `package-lock.json` are changed. This command will not work unless the Docker engine is running, which can be started by opening the desktop application.
- `docker compose down` will teardown the container.
- `docker compose stop` will halt the container from running without tearing it down.
- `docker compose start` will unhalt the container after it has been stopped.

---

### **Significant Files**

##### **Dockerfile**

*The Dockerfile is a sequence of instructions that tells Docker how to construct a container image for an application.*

```
# Use an official Node image that is small and Alpine-based
FROM node:20-alpine

# Create and use app directory
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies from package*.json inside the image
RUN npm install

# Copy the app source code from the current directory to the working directory (/app)
COPY . .

# Tell Docker to listen on Vite's development port
EXPOSE 5173

# Start the Vite development server on all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
```

- `FROM` defines a base image to be constructed from. All future work in the file will build off of this base image.
- `WORKDIR` sets the working directory inside of the container.
- `COPY` copies files from `<src>` to `<dst>`.
- `RUN` executes a command at *build time*.
- `CMD` executes a command at *container start time*.
- `EXPOSE` tells Docker which port to listen on.

##### **compose.yml**

```
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev -- --host
```

- `services` is a reserved top-level-key that is mandatory in all `compose.yml` files.
- `web` is a user-defined key that represents a service, which is a container or group of containers.
- `build` is a reserved key that tells Compose how to build the image. (In this case, the '.' refers to checking for the Dockerfile in this directory.)
- `volumes` controls storage mounts between the host and the container. `.:/app` mounts the current project folder to the working directory `/app` inside of the container. `/app/node_modules` provides an anonymous volume so the container keeps its own `node_modules` rather than overwriting.
- `command` runs a command every time that a container is started up. `npm run dev -- --host` will start the web-application.
---
