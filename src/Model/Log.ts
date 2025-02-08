export default class Log {
    logId:number;
    log_date: string;
    log_details: string;
    observationImg: string;

    constructor(logId:number,log_date: string, log_details: string, observationImg: string) {
        this.logId = logId
        this.log_date = log_date;
        this.log_details = log_details;
        this.observationImg = observationImg;
    }
}
