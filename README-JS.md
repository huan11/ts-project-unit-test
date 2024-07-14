# JS config

## Reference

https://jestjs.io/docs/getting-started

## Install Jest

```
npm install --save-dev jest
```

## Create a test file

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

```

## Config Jest command under package.json

```
"scripts": {
    "test": "jest"
  },
```

## Run Jest

```
npm test
```

eg

```
 npm test

> ts-project@1.0.0 test
> jest

 PASS  tests/sum.test.js
  ✓ adds 1 + 2 to equal 3 (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.421 s
Ran all test suites.
```
