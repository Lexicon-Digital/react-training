### Setup
 - Install [Node](https://nodejs.org/en) 
 - Using [NVM](https://github.com/nvm-sh/nvm)

## Node
- npm init, checkout package.json
- create and run test.js, using scripts
- install `nodemon` as dev dependency
  - `npm install --save-dev nodemon`
- Have a peak at `package.json` and `package-lock.json`
- create new script to run `nodemon test.js`
- install `is-even` as dependency
- check the documentation of is-even at [npmjs.com](npmjs.com)
- edit index.js to import module is-even and use the function, test
- install `@get200ok/is-even-number` as dependency
- import and use the new library
- commonJs vs ESM
- `"type": "module"` in package.json
- test code

## Browser
- using rollup to bundle all code, make available for browser
- use the is-even-number library and use the library
- check the script file loaded in the HTML, it's all bundled uo
- many such bundlers available, most bundlers have everything set up, may have to tweak
- Problem with bundling everything together, load upfront
- The idea of SPA
