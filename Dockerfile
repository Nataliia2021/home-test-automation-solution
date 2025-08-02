FROM mcr.microsoft.com/playwright:v1.44.1-jammy

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project files
COPY . .

COPY .env .env

# Install Playwright browsers and required dependencies
RUN npx playwright install --with-deps

# Default command to run tests in headless mode (no need for --headless)
CMD ["npx", "playwright", "test"]