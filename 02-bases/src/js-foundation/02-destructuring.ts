// console.log( process.env );

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
process.env.PORT = "8080";

// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

const [, , , batman] = characters;

// console.log(batman);
