const makeCreateUser = deps => name => {
  const uuid = deps.uuid.make();

  return deps.db
    .query(`INSERT INTO users VALUES ($uuid, $name)`, {
      bind: { uuid, name },
      type: "INSERT"
    })
    .then(() => {
      return deps.setState(state => {
        return [...state, { uuid, name }];
      });
    });
};

const makeGetUsers = deps => () => {
  return deps.getState().then(state => {
    return state;
  });
};

const makeModel = deps => {
  return {
    createUser: makeCreateUser(deps),
    getUsers: makeGetUsers(deps)
  };
};

const internal = {
  makeCreateUser,
  makeGetUsers
};

module.exports = {
  makeModel,
  internal
};
