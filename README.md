# FXStreet: frontend test

React page similar to one of FXStreet's products.

## Table of Contents

- [FXStreet: frontend test](#fxstreet-frontend-test)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Technical Details](#technical-details)
  - [Deployment](#deployment)
  - [Running the App Locally](#running-the-app-locally)

## Overview

This project aims to create a React page similar to one of FXStreet's products. The page is designed with responsiveness in mind, but only taking into account the two designs indicated in the Figma. Technical choices were made based on efficiency and the current best practices.

Figma guidelines in the link below:

[Figma link](https://www.figma.com/file/QLxHAbp9dmKJSd5eN4ogHY/Frontend-test-2022?type=design&node-id=0-1&mode=design&t=bLD2L7CGF8EiX9Kc-0)


## Technical Details

- **Language Choice**: Javascript has been chosen since Typescript was not mandatory and thus the development could be speeded up.
- **CSS Framework Choice**: Tailwind has been chosen for the styles since there was no other mandatory CSS framework and it is the one I have been working with lately.
- **Build Tool**: Vite was selected as the build tool due to its efficiency and the fact that create-react-app is no longer recommended by the documentation.
- **Responsive Design**: The page design is responsive, adapting to various screen sizes using Tailwind's default md breakpoint (768px). 
- **Loader**: A loader animation is integrated during the process of fetching posts.
- **Dropdowns**: Two dropdown components have been added with placeholder values.
- **Like and Save Buttons**: The Like and Save buttons have also been implemented with a simple toggle animation when clicked.

## Deployment

The app has been deployed and is accessible at: [https://fxstreet.vercel.app/](https://fxstreet.vercel.app/). 


## Running the App Locally

To run the app on your local machine, follow these steps:

1. Clone this repository:

`git clone https://github.com/pdelbarrio/fxstreet-test`

2. Navigate to the project directory.

3. Install the dependencies using `npm install`.

4. Start the development server using `npm run dev`
   
5. Open your web browser and visit [http://localhost:5173/](http://localhost:5173/) to view the app locally.

