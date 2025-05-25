# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose app port
EXPOSE 4000

# Start app
CMD ["npm", "start"]
