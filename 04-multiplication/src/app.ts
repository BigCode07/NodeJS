import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server.app";

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

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable } = yarg;
  ServerApp.run({ base, limit, showTable: true });
}
