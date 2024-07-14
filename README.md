# Project setup

Step1 init a new Node.js project

```
npm init --yes
```

Step2 install ts dependency

```
npm i -D typescript ts-node
```

Step3 Setup tsconfig

way1 `./node_modules/.bin/tsc --init`

```
./node_modules/.bin/tsc --init

Created a new tsconfig.json with:
                                                                                                                     TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```

way2 `npx tsc --init`

```
npx tsc --init

Created a new tsconfig.json with:
                                                                                                                     TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig

```

## Questions

Q1: Placing TypeScript under the devDependencies section rather than dependencies ?

```
Placing TypeScript under the devDependencies section rather than dependencies is common practice for several reasons:

Development Tool: TypeScript is a superset of JavaScript that provides optional static typing and other features. It's primarily used during development to catch type errors at compile time, which doesn't affect the runtime behavior of your application. Since the compiled JavaScript files (which lack TypeScript annotations) are what actually run in production, TypeScript itself isn't a runtime dependency.

Not Required at Runtime: The end product of a TypeScript project is usually JavaScript, which means that TypeScript isn't needed when the application is running in production. Therefore, it doesn't need to be included in the dependencies section, which is meant for packages that are required for the application to function at runtime.

Separation of Concerns: Keeping development tools like TypeScript separate from production dependencies helps maintain a clear distinction between what's needed for development and what's necessary for deployment. This can simplify the management of dependencies and reduce the size of the final package that gets deployed.

Avoiding Unnecessary Overhead: Including TypeScript in dependencies would mean that any system running your application would have to install TypeScript, even if it's not needed. This could increase the initial setup time and resource usage unnecessarily.

In summary, TypeScript is typically placed under devDependencies because it's a tool for developers, not a requirement for the application's runtime environment.
```

Q2: ts-node VS ts-node-dev

```
ts-node-dev is another package often used alongside TypeScript projects in Node.js. Here's what it is and how it differs from ts-node:

ts-node-dev: This is an extension of ts-node that includes development features such as hot reloading, which means your application will restart automatically whenever you make changes to your TypeScript source code. It's particularly useful during the development phase as it saves time by not requiring manual restarts of the server.
When you see ts-node-dev in a project, it typically indicates that the developers are leveraging its development-time conveniences for their TypeScript applications. The command to start the application might look something like:
```

Q3: What is the most popular .gitignore file for typescript ?
