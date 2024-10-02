import { Server } from "./presentation/server";

const main = () => {
  Server.Start();
};

(async () => {
  await main();
})();
