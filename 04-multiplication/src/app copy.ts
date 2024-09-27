import fs from "fs";

const outputPath = `outputs`;
let outputMessage = "";
const base = 5;

console.log(base);

const headerMessage = `
================================
          Tabla del ${base}
================================          
`;

for (let i = 0; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

console.log(outputMessage);

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
