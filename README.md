# test-workshop

## Preparations

* Install nodejs and npm.
* `npm install --save-dev jest`

## Red/Green/Refactor

* Red: Always start with a red (failing) test. It increases trust that the assertion is working correctly.

* Green: Write code that makes the test green (pass assertion).

* Refactor: Remove tech debt.

* Repeat until done.

The time between your repetitions can be called the "step size". Keep a small step size until you feel comfortable enough to increase it.

## Arrange, Act, Assert

Each test has three parts:

* Arrange: Setup the environment, load data, initialize functions, etc.
* Act: Trigger some event that changes the environment in some way.
* Assert: Make sure that the actual environments is what we expected.

## FAQ

### Why should I write tests?

To get higher confidence in your code.

### Do I need to start with test before the code?

No. Many prefer to start with the refactor phase and sketch out the code structure.

### How many assertions is good to have per test?

Try to have a single assertion per test.

### How do I mock data?

Use factory functions that creates new objects every time they are called.

### What assertions should I use?

Reference equality and structural equality (shallow equal and deep equal). There might be some additional assertions with value, but try to stick with these two.

### What is a unit test?

A unit can be of any size. It can be the size of a class, a submodule, or even a microservice. They usually test internal APIs and mock out dependencies.

### What is an integration test?

Testing two or more composed units is an integration test.

### What is an end-to-end test?

You test something from outmost unit down to the innermost unit. Example: A mobile app calls the auth service that calls the database. Usually, no mocks are used, although mail services and external services could still need mocking.

### What kind of test should I write most?

Write mostly integration tests. They are cheap, and bring good regression protection.
Unit tests can be valuable, but usually need to be deleted if the tested code changes, at which point they don't help against regression.

### Why is it dangerous to use beforeEach?

It makes many tests depend on the same thing. If someone need to change the code that runs before each test, it will change the behavior of each test, lowering the confidence of each single test. Try using test helpers that you call inside each test instead.
