# TypeScript Webpack Starter Project

This is a super simple, easy peasy lemon squeezy starter project for
TypeScript, using Webpack 3 for development & building and TSLint for
code quality.

## Key Features

- Webpack v3+
- TypeScript v2.4+ (dynamic imports to provide convenient bundle splitting)
- TSLint

## Commands

`npm start` — Run your local development server

`npm run build` — Compile your app into static, production-ready files

`npm run lint` — Run TSLint on files in the `src` directory

`npm run test` — Run tests with coverage output shown

`npm run test:watch` — Run tests continuously as files inside `src` change

## Project Status

This little project/boilerplate is still in development and I wouldn't
*yet* recommend it for primetime production apps, and will alsmost certainly
not yet cover all bases when it comes to writing web apps.

However, the goal for this project is to eventually make it into a
developer's friend for fast development and provide convenient tooling for
optimised, production-ready static assets.

Suggestions and PRs are welcome!

## Must-have goals checklist

- [ ] Finish getting Webpack config set up with the desired features
  - Stylesheet loader (SASS, CSS Modules, PostCSS)
  - Static asset loaders (images, fonts, etc...)
- [ ] Add testing suite with full TypeScript support
- [ ] Research & add common TypeScript definitions modules

## "Optimistic" goals checklist

- [ ] CLI tool for code/module generation
- [ ] Easy swapping of Webpack loaders in config

## About

This was first created in a couple of spare hours for fun as a primer to
Webpack v3 & TypeScript 2.4's new features.

The speed at which it's now possible to set up a Webpack-based dev/prod
setup goes to show that Webpack has come a long way (and keeps on going)
towards being as developer-friendly as possible, giving us amazing tooling
for little overhead during the initial setup.

**Developed by [Aaron Leo Cooper](http://webdevdiaries.com) for
[2359Media](https://2359media.com)**
