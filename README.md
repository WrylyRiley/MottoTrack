# MottoTrack

A simple Vue.js + Vuetify app with full CRUD functionality to keep track of companies and their motto. 

## Description

This is a ~~Habit Tracking app~~ ~~Guitar Tab tracking app~~ __*Motto Tracking app*__

It underwent several modifications before settling on what I made. I'm not suer satisfied with not reaching the stretch goals, but I'm still pretty satisfied with the result :D

## Example

This application displays a `<v-data-table>` with an always up-to-date listing of my remote database. The code itself is hooked into an [`Axios`](https://github.com/axios/axios) instance that's querying an API I designed in Express, and [deployed to Heroku](https://project-two-api.herokuapp.com/)

## Technology used

![Vue.js Image](./src/assets/vue-small.png)
Frameworked with [Vue.js](https://vuejs.org/)

![Vuetify Image](./src/assets/vuetify-small.png)
Designed with [Vuetify](https://vuetifyjs.com/)

![Express Image](./src/assets/express-small.png)
API designed with [Express.js](https://expressjs.com/)

Other additions includes Axios, body-parser, cors, morgan, and a slew of dependencies of vue-cli

This project was initialized with the standard Vue webpack template, and many of the visual elements were adapted from the Vuetify Docs.

The inspiration for this assignment came from a few places. First, for the initial server/vue templating, I drew from [this medium tutorial](https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0). I tried to staray as far from it as possible to avoid any issues with plagiarism, such as using vuetify, making a more robust webpage, and offloading my server to M_LAB. I also took a bit of inspiration from [this youtube video series from FreeCodeCamp](https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D), but I lost the guy after he got to SQL as his DB. Great primer for express servers nonetheless

### Thoughts

I'm proud that I managed to code this in a single day, but I;'m very disappointed that I took two whole days to figure out my original plans were not going to pan out. I would have had so much time for authentication, other 3rd party APIs, etc. had I been a bit of a better planner

That said, these are definitely the first things I'd like to change about this application:

* Make it DRYer. I repeated a lot of code to make things "just work", and didn't have tons of time to refactor

* Reuse components, such as the entry form, instead of making new section for each piece

* delve further into the component system and part of learning how to spread out my work more

* figure out separation of concerns with scripts and additional CSS

