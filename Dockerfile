# Use an official Node image (small, Alpine-based)
FROM node:20-alpine

# Create and use app directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies inside the image
RUN npm install

# Expose Vite's dev port
EXPOSE 5173

# Default command: start Vite dev server on all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
