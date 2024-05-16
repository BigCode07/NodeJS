const getAgePlugin = require("get-age");

const getAge = (birthDate) => {
  if (!birthDate) return new Error("birthdate is required");

  return new Date().getFullYear() - new Date(birthDate).getFullYear();
};

module.exports = {
  getAge,
};
