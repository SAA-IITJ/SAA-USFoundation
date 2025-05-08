# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Remove default NGINX config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files to NGINX directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
