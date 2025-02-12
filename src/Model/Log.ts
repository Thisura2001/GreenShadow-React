export default class Log {
    id:number;
    log_date: string;
    observed_image: string;
    log_details: string;


    constructor(id:number,log_date: string, log_details: string, observed_image: string) {
        this.id = id
        this.log_date = log_date;
        this.observed_image = observed_image;
        this.log_details = log_details;
    }
}
