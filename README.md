# finance-website

This project is a finance website built with a React frontend and a MongoDB backend. It is designed to run in Docker containers for easy deployment and development.

## Project Structure

```
finance-website
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers

│   │   ├── nginx
│   │   │   └── default.conf
│   │   ├── models
│   │   │   └── index.js
│   │   ├── routes
│   │   │   └── index.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── Dockerfile
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── index.js
│   │   ├── pages
│   │   │   └── index.js
│   │   └── index.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd finance-website
   ```

2. Build and run the containers:
   ```
   docker-compose up --build
   ```

### Usage

- The backend API will be available at `http://localhost:5000`.
- The frontend application will be available at `http://localhost:3000`.

### Contributing

Feel free to submit issues or pull requests for any improvements or features you'd like to see.

### License

This project is licensed under the MIT License.