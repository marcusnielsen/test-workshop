const { makeSayHello } = require("./index");

test("makeSayHello", () => {
  // Arrange
  let logMessages = [];

  const log = s => {
    logMessages = [...logMessages, s];
  };

  const deps = {
    log
  };

  const sayHello = makeSayHello(deps);

  // Act
  sayHello();
  sayHello();

  // Assert
  expect(logMessages).toEqual(["Hello world!", "Hello world!"]);
});
