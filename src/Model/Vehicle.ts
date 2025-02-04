import {Status} from "../Enum/Status.ts";

export default class Vehicle {
    vehicle_code:number
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: Status;
    staff: string;

    constructor(
        vehicle_code:number,
        licensePlateNumber: string,
        vehicleCategory: string,
        fuelType: string,
        status: Status,
        staff: string
    ) {
        this.vehicle_code = vehicle_code;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.staff = staff;
    }
}
