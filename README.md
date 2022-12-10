# BESSt Layout

This repo contains the frontend for BESSt Layout, a tool providing a site layout design given a combination of different Tesla batteries. The application was initially created leveraging [Create React App](https://create-react-app.dev/) and the [Typescript template](https://create-react-app.dev/docs/adding-typescript/).

## Instructions

BESSt allows you to input quantities of Megapack XL, Megapack 2, Megapack, and Powerpack to build your energy storage site.

As you update the desired quantity of each battery type, the following calcuations will be made.

1. Total Cost: the cost for all energy storage products and transformers.
2. Required Land: the total square footage needed to fit all selected energy storage systems and transformers.
3. Energy Density: the number of kWh of energy storage (minus transformer losses) divided by the required land's square footage.

In addition BESSt layout will show a rendering of your site, optimizing land to fit the desired energy storage capacity in the smallest footprint possible.

## Getting Started

Clone this repo and navigate to the project folder using your command line tool of choice.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
