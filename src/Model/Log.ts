export default class Log {
    id:number;
    log_date: string;
    observationImg: string;
    log_details: string;


    constructor(id:number,log_date: string, log_details: string, observationImg: string) {
        this.id = id
        this.log_date = log_date;
        this.observationImg = observationImg;
        this.log_details = log_details;
    }
}
