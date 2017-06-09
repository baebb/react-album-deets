# react-album-deets
react app for finding details of music albums on the itunes API

## Live URL

http://album-finder.s3-website-us-east-1.amazonaws.com/

## Usage

### Install dependencies
```sh
yarn install
```

### Build app on development server
```sh
yarn run start
```
A development app will be up on localhost:9999 and any changes to files inside /src will automagically update the app ✨


### Build production app
```sh
yarn run build:production
```
Builds a production-ready app in ./build


### Host built app (must have been built)
```sh
yarn run build:serve
```
The built production app will be hosted on localhost:8079

### Lint code
```sh
yarn run format
```
Cleans your codebase to follow the rules set in your eslintrc file. Useful for CI build tools.

### Test app
```sh
yarn run test
```
Runs your tests inside ./test against your app code

```sh
yarn run test:watch
```
Watches your app code and re-runs tests on any changes
