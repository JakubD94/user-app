# Random users browser

This is a basic users browser. Your task is to get the data from the API and display it on the screen.
Cover the features and requirements.

If there is anything unclear, reach out to us through email.

## Features
- [ ] As a user I want to see the list of people from https://randomuser.me/api/?results=20
- [ ] As a user I want to see the "Loading..." when the list is loading
- [ ] As a user I want to see the "Something went wrong" when there is an error with API connection
- [ ] As a user I want to see details of the user:
  - avatar
  - title
  - first name
  - last name
  - email
  - city
- [ ] As a user I want to be able to find people (filter the list) by name
- [ ] As a user I want to see "No results" message when there are no results of search by name
- [ ] As a user I want to see blue background in a row with the "Ms" title

## Requirements
- [ ] Cover the code with tests.

## Bonus points
- [ ] As a user I want to load next batch of people on button click
- [ ] As a user I want to click "Retry" button when fetching the data has failed

## API endpoints
- Get the data from https://randomuser.me/api/?results=20
- The data returned from the API is a JSON format

## FAQ
### Styling
It is up to you. Simple, elegant design.
### TypeScript
This project is based on TS because we use it in our projects. If you prefer JSX with prop typing, feel free to use it.

### Additional packages/dependencies
Feel free to add what you want to use (eg. UI Kit) but please keep the solution small, clean and neat.
### Deadline
We do not have a strict deadline. We value people's time and know they might be busy with other things. We would like to keep it in a reasonable time frame like ~2 weeks. We appreciate your updates as you progress.
### Tests
We encourage you to cover the code with tests. We write tests on a daily basis and we have a high ( > 80% ) test coverage of our codebase. That's why tests are important for us. Here are some tips:

We don't expect that every corner of the app will be tested so you can limit your list to the fundamental functionalities of the app. Good tests are the tests that give us confidence that the app/component is doing exactly what is expected.

For example test:
- if the list of users contains the users it received
- if after clicking on the button callback function is fired
- if after typing the name of the user the filtered list contains only those matching the criteria
- some conditionals like if the single user has a blue background when it has Ms title

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
