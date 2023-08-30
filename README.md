# Lottery Number Picker

This is a simple lottery number picker project. I was asked to code this during a technical interview many years ago. I wanted to write an implementation of it for fun.


## Instructions on Running the Project

1. Make sure Node is installed. You can install it at [Node.js](https://nodejs.org/en/download/).
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run build` to build the project.
5. Run `npm run start` to start the application.
6. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to play the lottery number picker game.


### Running Tests

- Run `npm run test` to run the unit tests.
- Run `npm run dev2:1` and `npm run dev2:2` simultaneously to run the application in development mode with hot reloading and auto-restart.


## Instructions for Your Own Development

- When importing, use `.js` file extensions. For example, write import statements such as `import foo from './foo.js'`.


## Approach that could be taken for testing randomness

Optimal tests usually don't test implementation details. They test the public contract of code.

In this case, good tests for randomness would be statistical tests utilising about 1 million `lotterNumberPicker` calls. The tests would check that the numbers were sufficiently random between different calls of `lotteryNumberPicker`.

However, those are heavier tests and can also be more flakey.

Another method would be to trust that the `array-shuffle` module works and test that your code is calling and using its result correctly.

That's trivial to do if you initialise your code with the `array-shuffle` code through dependency injection. Then, in your tests, you would pass a mock, check that it's been called correctly, return a predetermined result and check that the lottery number that's returned matches what you would expect based on your predetermined result.

Without dependency injection, we would have to monkey-patch the module. But, with vitest it means that we'll need to do this for every test using that module, instead of just the test where we're testing the randomness. Otherwise, the tests will fail.

With either method, for less fragile testing involving implementation details, you can do less precise testing by passing in a stub and simply checking that it was called once. Ignore the exact details of checking that you got the expected return value at the end. This has advantages to make tests less fragile if you change implementation in the future.

