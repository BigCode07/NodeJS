const users = [
  {
    id: 1,
    nombre: "Nicolas",
  },
  {
    id: 2,
    nombre: "Franco",
  },
  {
    id: 3,
    nombre: "Mario",
  },
  {
    id: 4,
    nombre: "Jorge",
  },
];

// const getUserById = (id, callback) => {
//   const user = users.find((user) => {
//     return user.id === id;
//   });

//   if (!user) {
//     return callback(`Usuario no encontrado ${id}`);
//   }

//   return callback(null, user);
// };

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);
  user ? callback(null, user) : callback(`User not found with ${id}`);
};

module.exports = {
  getUserById,
};
