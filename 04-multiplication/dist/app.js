"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const args_plugin_1 = require("./config/plugins/args.plugin");
// console.log(process.argv);
// console.log(yarg);
// (async () => {
//   console.log("Ejecutado");
// })();
// const datos = [
//   {
//     id: 1,
//     title: "Iron Man",
//     year: 2008,
//   },
//   {
//     id: 2,
//     title: "Spiderman",
//     year: 2017,
//   },
//   {
//     id: 3,
//     title: "Avengers",
//     year: 2019,
//   },
// ];
// const getDatos = () => {
//   return new Promise((resolve, rejects) => {
//     if(datos.length===0){
//         rejects(new Error('No existen datos'));
//     }
//     setTimeout(() => {
//       resolve(datos);
//     }, 1500);
//   });
// };
// // getDatos().then((datos) => console.log(datos));
// async function fetchingData() {
//   try {
//     const datosFetched = await getDatos();
//     console.log(datosFetched);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// fetchingData();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
}))();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(args_plugin_1.yarg);
    });
}
