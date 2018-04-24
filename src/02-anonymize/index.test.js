const { anonymize } = require("./index");

test("anonymize", () => {
  const data = [
    {
      uuid: "123-abc",
      username: "marcusnielsen",
      age: 36,
      email: "marcus@karma.life"
    }
  ];

  const result = anonymize(data);

  expect(result).toEqual([
    {
      uuid: "123-abc",
      username: "marcusnielsen",
      age: 4,
      email: "123-abc@example.com"
    }
  ]);
});
