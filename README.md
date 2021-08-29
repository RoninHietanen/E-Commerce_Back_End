# E-Commerce_Back_End

## Description
```md
This is a E-Commerce Back End program that I had to refactor.
```

## User Story 

```md
AS A manager at an internet retail company.
I WANT a back end for my e-commerce website that uses the latest technologies.
SO THAT my company can compete with other e-commerce companies.
```

## What you will need

VS Code or another type of coding interface installed.

Node.js isntalled.

Gitbash installed.

MySQL installed.

## How to install

*Instructions*
```md
1. Fork the repository
2. Clone the repository to your computer
3. Navigate into the E-Commerce_Back_End folder
4. In the E-Commerce_Back_End folder use the following command `npm install`
5. The next command will be `npm init -y`
        if after completing this command you see: 
          "dependencies": {
            "dotenv": "^8.2.0",
            "express": "^4.17.1",
            "mysql2": "^2.1.0",
            "sequelize": "^5.21.7"
          }
        Skip to 11 otherwise continue from 6
6. The next command will be `npm i sequelize --save`
7. The next command will be `npm i dotenv --save`
8. The next command will be `npm i mysql2 --save`
9. navigate to the db folder and run `mysql -u root -p` and login
10. run SOURCE schema.sql
11. exit out of mySQL and navigate back into the root foler
12. You will then need to navigate to the file in file explorer and create a .env file like the following and save it:
    DB_USER='root'
    DB_PW=''
    DB_NAME='ecommerce_db'
13. Then you should be able to explore the program as you feel
```

## Key Technologies Used

**Node.js**

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

**Sequelize**

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

**Dotenv**

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

**MySQL**

MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.
