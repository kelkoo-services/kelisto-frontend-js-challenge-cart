## Kelisto Js Challenge

https://diegodinizz.github.io/kelisto-frontend-js-challenge/

The Kelisto JS Challenge is an application built with React, Redux, Styled Components, and hosted on GitHub Pages. The application must display a product listing page and shopping basket. The solution should:

- Be a website, using React.
- Consume a JSON feed of products (see below) and display them on a page.
- Allow users to add a product to their basket.
- Allow users to view the products in their basket.

<img width="1680" alt="Screenshot 2020-12-10 at 16 40 04" src="https://user-images.githubusercontent.com/47988806/101801822-aa6c5100-3b06-11eb-8929-5e5e02120894.png">

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

#### Installation:

`npm install`

#### Start Server:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Production:

`npm run deploy`

It correctly bundles React in production mode and optimizes the build to be deployed on Gh Pages.

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Redux](https://github.com/reduxjs/react-redux), [Styled Components](https://github.com/styled-components/styled-components) and [Moment.js](https://github.com/moment/moment/). 

## API Reference

Please fetch the products to be displayed as JSON from this URL: [./data/products.json](./data/products.json).

## Hosted

The project is hosted on [Gh Pages](https://pages.github.com) at https://diegodinizz.github.io/spacex-launches/

## Reflection

This was a two days-long project built as a short technical exercise. Project goal included is to create a React application that will consume data from the JSON products file provided.

Originally I wanted to build an application that allowed users to see list of products and then added them to the shopping bag. I started this process by using the `create-react-app` boilerplate, then adding `Redux` to manage the state flow in the App, and `styled-components` to write actual CSS code to style the components.

One of the main challenges I ran into was to pull the information from the JSON file. This leads me to spend a few hours planning a better way to display the information coming from the JSON file. Due to project time constraints, I had to decide a simplified design to demonstrate a better visualisation of the pieces of information that I had available.

At the end of the day, the technologies implemented in this project are React, Redux, Styled Components, and Gh Pages to deploy it. I choose to use as fewer frameworks as possible to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration with more time, I would like to implement a more detail visualisation of the products, type safety method and possibly unit tests.
