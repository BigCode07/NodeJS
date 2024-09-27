"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const args_plugin_1 = require("./config/plugins/args.plugin");
const { b: base, l: limit, s: showTable } = args_plugin_1.yarg;
const outputPath = `outputs`;
let outputMessage = "";
console.log(base);
const headerMessage = `
================================
          Tabla del ${base}
================================          
`;
for (let i = 0; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;
if (showTable) {
    console.log(outputMessage);
}
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File Created!");