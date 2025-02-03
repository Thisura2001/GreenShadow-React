import {Status} from "../Enum/Status.ts";
import Staff from "./Staff.ts";

export default class Vehicle {
    vehicleCode:number
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: Status;
    staff: Staff;

    constructor(
        vehicleCode:number,
        licensePlateNumber: string,
        vehicleCategory: string,
        fuelType: string,
        status: Status,
        staff: Staff
    ) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.staff = staff;
    }
}
