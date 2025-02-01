export default class Log {
    log_date: string;
    log_details: string;
    observationImg: string;

    constructor(log_date: string, log_details: string, observationImg: string) {
        this.log_date = log_date;
        this.log_details = log_details;
        this.observationImg = observationImg;
    }
}
