import {Status} from "../Enum/Status.ts";

export default class Vehicle {
    vehicleCode:number
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: Status;
    staff: string;

    constructor(
        vehicleCode:number,
        licensePlateNumber: string,
        vehicleCategory: string,
        fuelType: string,
        status: Status,
        staff: string
    ) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.staff = staff;
    }
}
