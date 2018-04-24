const { makeModel, internal } = require("./index");
const { makeCreateUser, makeGetUsers } = internal;

const makeTestDeps = () => {
  let queries = [];
  let state = [];
  let idCount = 0;

  return {
    uuid: {
      make: () => {
        idCount = idCount + 1;
        return `abc-123-${idCount}`;
      }
    },
    db: {
      query: (...args) => {
        queries = [...queries, args];
        return Promise.resolve(null);
      },
      test: {
        getQueries: () => {
          return queries;
        }
      }
    },
    setState: updaterFn => {
      state = updaterFn(state);
      return Promise.resolve(state);
    },
    getState: () => {
      return Promise.resolve(state);
    }
  };
};

test("makeCreateUser", () => {
  // Arrange
  const deps = makeTestDeps();
  const createUser = makeCreateUser(deps);

  // Act
  return createUser("Marcus")
    .then(() => {
      return createUser("Moa");
    })
    .then(() => {
      return deps.getState();
    })
    .then(state => {
      // Assert
      expect(state).toEqual([
        { name: "Marcus", uuid: "abc-123-1" },
        { name: "Moa", uuid: "abc-123-2" }
      ]);
    });
});

test("makeGetUsers", () => {
  // Arrange
  const deps = makeTestDeps();
  const getUsers = makeGetUsers(deps);

  // Act
  return getUsers().then(users => {
    // Assert
    expect(users).toEqual([]);
  });
});

test("makeModel", () => {
  const deps = makeTestDeps();
  const model = makeModel(deps);

  return model
    .createUser("Moa")
    .then(() => {
      return model.createUser("Sandra");
    })
    .then(() => {
      return model.getUsers();
    })
    .then(users => {
      expect(users).toEqual([
        { name: "Moa", uuid: "abc-123-1" },
        { name: "Sandra", uuid: "abc-123-2" }
      ]);
    });
});
