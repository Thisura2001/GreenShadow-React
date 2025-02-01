import Field from "./Field.ts";
import {Role} from "../Enum/Role.ts";
import {Designation} from "../Enum/Designation.ts";
import {Gender} from "../Enum/Gender.ts";
import {Vehicle} from "./Vehicle.ts";

export default class Staff {
    firstName: string;
    designation: Designation;
    gender: Gender;
    joined_date: string;
    dob: string;
    address: string;
    contact_no: string;
    email: string;
    role: Role;
    fields: Field[];
    vehicle: Vehicle[];

    constructor(
        firstName: string,
        designation: Designation,
        gender: Gender,
        joined_date: string,
        dob: string,
        address: string,
        contact_no: string,
        email: string,
        role: Role,
        fields: Field[],
        vehicle: Vehicle[]
    ) {
        this.firstName = firstName;
        this.designation = designation;
        this.gender = gender;
        this.joined_date = joined_date;
        this.dob = dob;
        this.address = address;
        this.contact_no = contact_no;
        this.email = email;
        this.role = role;
        this.fields = fields;
        this.vehicle = vehicle;
    }
}
