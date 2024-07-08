## unit testing using vitest (like jest)
- `npm install -D vitest` 
- add script to package.json
- create and run test
- `npm install -D @testing-library/react @testing-library/jest-dom`
- update config
```
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
...
  test: {
    globals: true,
    environment: "jsdom",
  },
```
- create and run dom test
