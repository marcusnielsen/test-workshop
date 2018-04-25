const makeSayHello = deps => () => {
  deps.log("Hello world!");
};

module.exports = {
  makeSayHello
};
