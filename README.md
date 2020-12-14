# Shoptify shopping website

> Shopping website built with MERN stack

![screenshot](https://github.com/siddharthroy12/Shoptify/blob/main/uploads/screenshot.png)

## Live Site
[https://theshoptify.herokuapp.com/](https://theshoptify.herokuapp.com/)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

### ES Modules in Node
This Project use ECMAScript Modules in the backend.
Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error


### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
IMGBB_KEY = imgbb api key
```

### Install Dependencies (frontend & backend)

```
yarn install
cd frontend
yarn install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
yarn run dev

# Run backend only
yarn run server

# Run client only
yarn run client
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
yarn run build
```

There is a Heroku postbuild script available for Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
yarn run data:import

# Destroy data
yarn run data:destroy

```
Sample User Logins

admin@example.com (Admin)
1234

vansh@example.com (Customer)
1234

saif@example.com (Customer)
1234
```


## License

The MIT License

Copyright (c) 2020 Siddharth Roy https://siddharthroy.netlify.app

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.