# eCommerce-Server-Express

An eCommerce database built on Express.js on Node.js.

## Installation and Setup

- install [Node.js](https://nodejs.org/en/download/) and [MySql](https://www.mysql.com/downloads/)
- `git clone` and `cd` to eCommerce-Server-Express
- `npm install`
- log into mySQL account and run `source db/schema.sql` to create "ecommerce_db" database.
- rename the `.envEXAMPLE` file to `.env` and edit with your mySQL username and password

```
    DB_NAME="ecommerce_db"
    DB_USER="Your User Name"
    DB_PW="Your Password"
```

- `npm run seeds` to create the schema for your `ecommerce_db` database and seed data to it 

## Features

- Database includes `categories` (e.g., sweaters), `products` (e.g., JCrew - Merino Wool), and `tags` (e.g., European, brown, winter)
- Many to Many relationships between products and tags
- GET, POST, PUT, and DELETE routes for categoies, prodcts, and tags
- Modularized codebase for scalability

## Usage

Currently this is just the back-end API code. To test the routes:

1. Install [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download)
2. From the app directory, `node server.js` to start the server on your computer on port 3001
3. In Postman or Insomnia, enter the `GET`, `POST`, `PUT`, or `DELETE` route you wish to test and the requisite JSON data (for POST and PUT routes) e.g., 

### GET Routes

- All items

`http://localhost:3001/api/products`

- Single item

`http://localhost:3001/api/products/id:`

### POST

Request Body (raw JSON)

```
    {
      "product_name": "Led Zeppelin: The Song Remains the Same",
      "price": 15.99,
      "stock": 8,
      "category_id": 3,
      "tagIds": [1, 8, 11]
    }

```

### PUT

`http://localhost:3001/api/products/id:` 

Request Body (raw JSON)

```
    {
      "tagIds": [10, 11]
    }

```

### DELETE

`http://localhost:3001/api/products/id:` 

(no body)

## Video Demonstration

<a href="https://www.dropbox.com/" target="_blank">Video Demonstration of Installation and Usage</a>