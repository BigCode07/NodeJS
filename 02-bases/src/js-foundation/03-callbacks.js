const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Braian",
  },
  {
    id: 3,
    name: "Franco",
  },
  {
    id: 4,
    name: "Peter",
  },
  {
    id: 5,
    name: "Neil",
  },
];

// function getUserById(id) {
//   const user = users.find(function (user) {
//     return user.id === id;
//   });

//   console.log({ user });
// }

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return callback(`User not found with id ${id}`);
  }

  return callback(null, user);
};

module.exports = {
  getUserById,
};
