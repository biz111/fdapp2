FROM node:14 AS frontend-build
WORKDIR /usr/src/app
COPY ./ ./client
RUN cd client && npm install && npm run build

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=frontend-build /usr/src/app/client/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5000
EXPOSE 5000