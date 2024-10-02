import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";


export class Server {

    static Start(){
        console.log("Server Started...");
        CronService.createJob(
            '*/5 * * * * *',
            () =>{
                new CheckService().execute('https://google.com');
            }
        );

        
    
    }
}