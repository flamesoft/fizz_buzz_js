## Fizz_buzz web
This is fizz_buzz web implemented with javascript.

## JS Test Boilerplate 0.1 (WIP)
[![Build Status](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate.svg?branch=master)](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/CraftAcademy/karma-jquery-jasmine_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/CraftAcademy/karma-jquery-jasmine_boilerplate?branch=master)

####Dependencies
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
  - [Karma Jasmine](https://github.com/karma-runner/karma-jasmine)
  - [Karma Jasmine JQuery](https://github.com/bessdsv/karma-jasmine-jquery)
  - [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma Coveralls](https://github.com/caitp/karma-coveralls)
  - [Karma Spec Reporter](https://github.com/mlex/karma-spec-reporter)

####Services
* [Travis](https://travis-ci.org/) for Continuous Integration
* [Coveralls](https://coveralls.io/) for Test Coverage

####Set up
Fork or download this repo (using `git clone`) and modify the files to suite your testing needs.

Once downloaded, you need to install all dependencies. Run
```
$ npm install
```

####Usage
You can use this setup to test your units and your jQuery events. Place your JavaScript code in `assets/js/` folder and partials in `spec/fixtures/` folder.

Your specs need to be end with `_spec.js` (e.g. `fizz_buzz_spec.js`)

Run tests with
```
$ npm test

# or

$ karma start karma.conf.js
```

####Tests
Tests are added in the following files.

```javascript
# spec/fizz_buzz_spec.js
# spec/fizz_buzz_ui_spec.js
