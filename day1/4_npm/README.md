### Setup
 - Install [Node](https://nodejs.org/en) 
 - Using [NVM](https://github.com/nvm-sh/nvm)

## Node
- npm init, checkout package.json
- crate and run test.js, using scripts
- install @get200ok/is-even-number as dependency
- install nodemon as dev dependency
- checkout npmjs.com
- implement isOdd function in index.js
- commonJs vs ESM 
  - const isEven = require("is-even"); / module.exports = { isOdd }
  - import { isEvenNumber as isEven } from "@get200ok/is-even-number";
- type: module in package.json
- test code

## Browser
- using rollup to bundle all code, make available for browser
- many such bundlers available, most bundlers have everything set up, may have to tweak
- Problem with bundling everything together, load upfront
- The idea of SPA



### NPM
 - npm init
 - understand package.json file
   - npm install dependencies
   - npm scripts
 - create and use an NPM package
   - checkout [npmjs.com](https://www.npmjs.com/)
 - bundling
   - require vs. import
   - [rollup](https://rollupjs.org/)
