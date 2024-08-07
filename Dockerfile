# Stage 1: Build the client application
FROM node:14 AS client-build
WORKDIR /app
COPY pactify-app/package*.json ./
RUN npm install
COPY pactify-app/ ./
RUN npm run build

# Stage 2: Build the server application
FROM node:14 AS server-build
WORKDIR /app
COPY pactify-server/package*.json ./
RUN npm install
COPY pactify-server/ ./

# Copy the client build to the server's public directory
COPY --from=client-build /app/build /app/public

# Expose the port on which the server will run
EXPOSE 5000

# Command to run the server
CMD ["node", "server.js"]