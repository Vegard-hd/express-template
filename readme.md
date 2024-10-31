# Express.js Template with EJS

This is a simple Express.js template project that uses EJS as the view template engine. It provides a basic structure to get you started with building web applications using Express.js and EJS.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Features

- Express.js for server-side logic
- EJS for templating
- Basic project structure
- Sample routes and views

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express-template
   ```
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Add this to setting.json in vscode to enable prettier.

5. .env file:

```md
HOST = "localhost"
ADMIN_USERNAME = "todoAdmin"
ADMIN_PASSWORD = "Norofftodo2110"
DATABASE_NAME = "myTodo"
DIALECT = "mysql"
PORT = "3000"
```

---

visual studio code settings.json

```bash
   "[javascript]": {
   	"editor.defaultFormatter": "esbenp.prettier-vscode"
   },
   "[html]": {
   	"editor.defaultFormatter": "esbenp.prettier-vscode"
   },
```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to see the application in action.

## Project Structure

```
express-template/
├── public/
│   ├── css/
│   └── js/
├── routes/
│   └── index.js
├── views/
│   ├── index.ejs
│   └── layout.ejs
├── app.js
├── package.json
└── README.md
```

- `public/`: Contains static assets like CSS and JavaScript files.
- `routes/`: Contains route definitions.
- `views/`: Contains EJS templates.
- `app.js`: Main application file.
- `package.json`: Project metadata and dependencies.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
