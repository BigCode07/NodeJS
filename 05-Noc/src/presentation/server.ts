import { FileSystemDataSource } from "./../infrastructure/datasources/file-system.datasource";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

export class Server {
  static Start() {
    console.log("Server Started...");
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://localhost:3000";
      new CheckService(
        fileSystemLogRepository,
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
