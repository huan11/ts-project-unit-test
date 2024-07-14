# Ts Config

## reference

https://jestjs.io/docs/getting-started#using-typescript

https://jestjs.io/docs/getting-started#via-ts-jest

https://jestjs.io/docs/getting-started#type-definitions

## Install Jest

```
npm install --save-dev  ts-jest @types/jest
```

Explain :
choose to install the @types/jest package. It provides types for Jest globals without a need to import them.

## Config jest.config.js

```
yarn ts-jest config:init

```

modify the file content

```
module.exports = {
  preset: 'ts-jest', /* this fix the issue that cant run `yarn test` after install ts-jest and @types/jest */
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
};

```

## Only test specific file

```
yarn test tests/testhub.test.ts
```

# Issue met if only install @types/jest and ts-jest （need to config jest.config.js）

```
yarn test

yarn run v1.22.21
warning ../../../../../package.json: No license field
$ jest
 FAIL  tests/testhub.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/huan/Documents/code/series-code-example-simple/ts/ts-project-unit-test/tests/testhub.test.ts:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import { expect } from '@jest/globals';
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.451 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
