console.log(process.env);

const {USERNAME,COLOR} = process.env;

console.log(USERNAME);
console.log(COLOR);

const characters =["Flash","Superman","Green Light","Batman"];
const [,,,batman] =  characters;
console.log(batman);