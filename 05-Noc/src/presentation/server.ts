import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  static Start() {
    console.log("Server Started...");
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://google.com";
      new CheckService(
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      ).execute("https://google.com");
    });
  }
}
