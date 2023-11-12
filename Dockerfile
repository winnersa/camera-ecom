# Step 1: Build the Next.js application
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code (assuming your source code is in the same directory as your Dockerfile)
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables (if any)
ENV PORT 3000
ENV HOSTNAME localhost

# Start the application in development mode
CMD ["npm", "run", "dev"]
