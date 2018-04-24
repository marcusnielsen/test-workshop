const anonymize = users => {
  return users.map(u => {
    return {
      ...u,
      age: Math.round(u.age / 10),
      email: `${u.uuid}@example.com`
    };
  });
};

module.exports = { anonymize };
