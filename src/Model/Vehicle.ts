import {Status} from "../Enum/Status.ts";
import Staff from "./Staff.ts";

export default class Vehicle {
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: Status;
    staff: Staff;

    constructor(
        licensePlateNumber: string,
        vehicleCategory: string,
        fuelType: string,
        status: Status,
        staff: Staff
    ) {
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.staff = staff;
    }
}
