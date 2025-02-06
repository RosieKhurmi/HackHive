# ---- Base Node ----
    FROM node:18-alpine AS base
    WORKDIR /app
    COPY package*.json ./
    
    # ---- Dependencies ----
    FROM base AS dependencies
    RUN npm install
    
    # ---- Copy Files/Build ----
    FROM dependencies AS build
    WORKDIR /app
    COPY . /app
    
    # Build the Angular application
    RUN npm run build -- --output-path=dist --configuration production
    
    # --- Release with Nginx ----
    FROM nginx:alpine AS release
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    WORKDIR /usr/share/nginx/html
    COPY --from=build /app/dist/browser .
    
    # Expose port 80
    EXPOSE 80
    
    # Start nginx when the container launches
    CMD ["nginx", "-g", "daemon off;"]