Web Scraping Application

This is a small web scraping application designed to fetch and process data from websites. The project is built using Node.js for the backend and React with Vite for the frontend. It includes tools like Cheerio for scraping and Yup for validation.

Features

Web Scraping: Extract structured data from websites using Cheerio.

Form Validation: Validate user inputs on the frontend using React Hook Form and Zod.

API Integration: Use Axios for making HTTP requests between frontend and backend.

TailwindCSS Styling: Responsive and clean UI built with TailwindCSS.

Tech Stack

Frontend

React: For building user interfaces.

Vite: For fast development and build processes.

React Hook Form: For form management and validation.

Zod: For schema-based form validation.

TailwindCSS: For styling.

Backend

Node.js: Server-side runtime.

Express: For building REST APIs.

Cheerio: For web scraping.

Yup: For input validation.

Installation

Prerequisites

Node.js and npm/yarn installed.

A modern browser for accessing the frontend.

Backend Setup

Clone the repository.

Navigate to the server directory.

Install dependencies:

npm install

Start the server:

npm run server

Frontend Setup

Navigate to the client directory.

Install dependencies:

npm install

Start the development server:

npm run dev

Project Structure

Backend

server/
├── index.js             # Entry point of the server
├── package.json         # Dependencies and scripts
├── node_modules/        # Installed dependencies
├── .env                 # Environment variables

Frontend

client/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Application pages
│   ├── App.jsx          # Main application file
├── tailwind.config.js   # TailwindCSS configuration
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration

Environment Variables

Create a .env file in the backend directory and add the following:

PORT=3000
CORS_ORIGIN=http://localhost:5173

Adjust values as per your configuration.

Dependencies

Backend

axios: For making HTTP requests.

body-parser: For parsing incoming request bodies.

cheerio: For scraping HTML content.

cors: To handle cross-origin requests.

express: To set up the server and routes.

yup: For schema validation.

Frontend

react: For building the user interface.

react-hook-form: For handling forms.

zod: For validation.

tailwindcss: For styling.

Contribution

Contributions are welcome! Feel free to submit issues or pull requests.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Author

Developed by Raushan Singh.

