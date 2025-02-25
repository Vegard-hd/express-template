# Express.js Template with EJS

This is a simple Express.js template project that uses EJS as the view template engine. It generates admin user on startup and a database with a users and tasks table. Going to the /tasks endpoint allows users to add tasks to the database.

## Features

- Sequelize ORM to perform database related operations.
- MySQL database setup with users and tasks tables where users and tasks has a one-to-many relationship.
- add tasks with name and description in the /tasks endpoint
- Express.js for server-side logic
- EJS for templating
- Bootstrap 5 UI library

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vegard-hd/express-template
   ```
2. Navigate to the project directory:
   ```bash
   cd express-template
   ```
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a .env file in the root directory:

```bash
HOST="localhost"
ADMIN_USERNAME="taskadmin"
ADMIN_PASSWORD="taskadmin123456"
DATABASE_NAME="taskTemplateApp"
DIALECT="mysql"
PORT="3000"
```

---

5. ### Requires a MySQL database running at localhost; change _HOST_ .env variable to use with external database. Change _dialect_ .env variable to use with another SQL datbase.

6. ### Create the user and database on the MySQL db to complete the setup.

```SQL
CREATE DATABASE taskTemplateApp;

CREATE USER 'taskadmin'@'localhost' IDENTIFIED BY 'taskadmin123456';

GRANT ALL PRIVILEGES ON taskTemplateApp.* TO 'taskadmin'@'localhost';

FLUSH PRIVILEGES;

```

---

### Recommended visual studio code settings.json

```json
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
3. run:

   ```bash
   npm run lint
   ```

   To run prettier formatting on the entire project.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Bootstrap5](https://getbootstrap.com/)
- [Sequelize](https://sequelize.org/)

---

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
