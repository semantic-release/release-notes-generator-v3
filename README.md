# release-notes-generator

> 🔩📖 generates release notes from commits

[![npm version](https://badge.fury.io/js/%40semantic-release%2Frelease-notes-generator.svg)](http://badge.fury.io/js/%40semantic-release%2Frelease-notes-generator)
[![Build Status](https://travis-ci.org/semantic-release/release-notes-generator.svg?branch=master)](https://travis-ci.org/semantic-release/release-notes-generator)
[![Coverage Status](https://coveralls.io/repos/semantic-release/release-notes-generator/badge.svg)](https://coveralls.io/r/semantic-release/release-notes-generator)
[![Dependency Status](https://david-dm.org/semantic-release/release-notes-generator.svg)](https://david-dm.org/semantic-release/release-notes-generator)
[![devDependency Status](https://david-dm.org/semantic-release/release-notes-generator/dev-status.svg)](https://david-dm.org/semantic-release/release-notes-generator#info=devDependencies)

## Usage

```js
const releaseNotes = require("@semantic-release/release-notes-generator")

releaseNotes({}, (error, changelogs) {

})
```

## How it works

`release-notes-generator` is using [conventional-changelog](https://www.npmjs.com/package/conventional-changelog) with the Angular preset to parse commit messages and the `package.json` file in order to calculate the changelogs for a new release.

## License

MIT
