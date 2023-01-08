# TRPC OpenAPI Demo

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [TRPC](https://trpc.io) api hosted with [Express](https://expressjs.com/)
- `web`: a [Next.js](https://nextjs.org/) app that demonstrates the functionality exported by the core TRPC routes
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`, and `eslint-config-turbo`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```
