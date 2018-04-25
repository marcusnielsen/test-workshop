const { makeSayHello } = require("./index");

test("makeSayHello", () => {
  // Arrange

  let mockMessageLog = [];

  const log = s => {
    mockMessageLog = [...mockMessageLog, s];
  };

  const deps = {
    log
  };

  const sayHello = makeSayHello(deps);

  // Act
  sayHello();
  sayHello();

  // Assert
  expect(mockMessageLog).toEqual(["Hello world!", "Hello world!"]);
});
