# The Diabetes Calculator

A meal planning application that allows users to calculate their recommended carbohydrate needs per meal to maintain stable blood glucose levels for T2DM, and then search for recipes, menu items, or grocery products that fit within these ranges.

View Miro: https://miro.com/app/board/uXjVOtvKH2s=/?share_link_id=720508772353

## Features & Usage

-  create account with username, email, password or sign in using Google
-  Enter height, weight, age, gender, and activity level to calculate your total daily recommended calories, carbohydrates, protein, and fat for someone with Type 2 Diabetes Mellitus
-  Search for recipes, grocery products, or menu items from a list of over 800+ American restaurants (search results provided by [Spoonacular API](https://spoonacular.com/food-api))
-  Save your favorite food items to the day and meal of your choice to create a custom mealplan
-  Search for food items with any custom nutrient ranges
-  Edit your recommended nutrient ranges by using the Diabetes Calculator again or simply entering your preferred nutrient ranges
-  Dark and light modes are available for preferred viewing option, with preferred option being saved to local storage

## Roadmap

-  Allow other sign in methods including Apple or Facebook
-  Be able to search for specific ingredients
-  Can include food intolerances when searching for items
-  User can create a shopping list from their meal plan
-  Provide user the option to create a sample meal plan

## Demo

## Tech Stack

This project was built with the following technologies:

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
<img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />

## Setup/ Installation

use command source server/database/schema.sql

-  Clone this repository and navigate to project directory in the terminal
-  Install necessary dependencies:

```bash
npm install
```

-  Create a client/dist directory and a index.html file for webpack to output content to.

-  Then, if environment is set to development, run the application like so:

```bash
npm run dev
```

This opens a development server in your local browser at port 3000.

-  When application is ready for production, have webpack build your bundle and minimize your files:

```bash
npm run build
```

Then navigate to port 8080 in your browser to view your application.

## Testing

-  Run unit tests with Jest/React Testing Library:

```bash
npm run jest
```

-Then run end to end tests with Cypress:

```bash
npm run cypress
```

-Or run both tests concurrently:

```bash
npm run test
```

## Resources

-  [React code-splitting](https://reactjs.org/docs/code-splitting.html)
-  [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
   https://spoonacular.com/food-api/docs
   https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest

https://stackoverflow.com/questions/42749033/fatal-password-authentication-failed-for-user-root-postgresql

https://stackoverflow.com/questions/3949876/how-to-switch-databases-in-psql

https://stackoverflow.com/questions/65877048/pgadmin-on-ubuntu-20-04-fatal-password-authentication-failed-for-user
