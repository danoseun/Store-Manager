[![Build Status](https://travis-ci.org/danoseun/Store-Manager.svg?branch=develop)](https://travis-ci.org/danoseun/Store-Manager)
[![Coverage Status](https://coveralls.io/repos/github/danoseun/Store-Manager/badge.svg?branch=develop)](https://coveralls.io/github/danoseun/Store-Manager?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/b7cbde7d8617918e3eaf/maintainability)](https://codeclimate.com/github/danoseun/Store-Manager/maintainability)


# Store-Manager
Store Manager is a web application that helps store owners manage sales and product inventory records. This application is meant for use in a single store.

## Table of Contents
- [Application Features](#application-features)
- [UI-gh-pages](#UI)
- [APIRoutes](#API Routes)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the tests](#running-the-tests)
- [Built With](#built-with)
- [Contributing to the Project](#contributing-to-the-project)
- [Credits](#credits)

## Application features
* Admin can register new Store Attendant to the application
* Admin/Store Attendant can login to the application
* Admin can create a product record
* Admin/Store Attendant can get all products in the store.
* Admin/Store Attendant can get details of a single product in the store
* Admin can update records of a single product in the store.
* Store Attendant can post a sale record
* Admin/Sale Creator can get details of a single sale
* Admin can get all sale records

## UI
> https://danoseun.github.io/Store-Manager/UI

## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>api/v1/sales</td>  <td>Create Sale Record</td></tr>

<tr><td>GET</td> <td>api/v1/sales/:saleId</td>  <td>Get A sale record</td></tr>

<tr><td>GET</td> <td>api/v1/sales</td>  <td>Get All sales</td></tr>

<tr><td>POST</td> <td>api/v1/products</td> <td>Create a product record</td></tr>

<tr><td>GET</td> <td>api/v1/products/:productId</td> <td>Get a single product in the store</td></tr>

<tr><td>GET</td> <td>api/v1/products</td> <td>Get all products in the store</td></tr>

<tr><td>PUT</td> <td>api/v1/products/:productId</td> <td>Update details of a product<td></tr>

<tr><td>POST</td> <td>api/v1/auth/signup</td> <td>Create a user</td></tr>

<tr><td>POST</td> <td>api/v1/auth/login</td> <td>Sign in a user</td></tr>
</table>

## Prereequisites
* Install Nodejs and PostgreSQL locally

## Getting Started
Follow the steps below to get the app running locally:
```
# Clone the repository
>$ git clone https://github.com/danoseun/Store-Manager.git

# Change directory into it
>$ cd Store-Manager

# Install all dependencies
> npm install

# Start the application in development mode
> npm run start

# Open the application in the browser
> https:localhost:4000/

```

## Running the tests
> npm run test

## Built with
FrontEnd
> HTML- Markup language
> CSS- Styling

Backend
> Nodejs
>Express

## Contributing to the Project
Contributions are welcome and appreciated. To contribute

- Fork this repository or clone the repository with the command  
`$ git clone https://github.com/danoseun/Store-Manager.git`
- Change directory into the folder with the command  
`cd Store-Manager`
- Create your feature branch and make your contributions to your local copy of the project
- Raise a pull Request against the development branch describing what your feature does and how it can be tested

## Credits
Oluwaseun Somefun