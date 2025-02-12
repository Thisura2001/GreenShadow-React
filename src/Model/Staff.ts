

import Vehicle from "./Vehicle.ts";

export default class Staff {
    id: number;
    firstName: string;
    designation: string;
    gender: string;
    joined_date: string;
    dob: string;
    address: string;
    contact_no: string;
    email: string;
    role: string;
    fields: number;
    vehicle?: Vehicle[];

    constructor(
        id: number,
        firstName: string,
        designation: string,
        gender: string,
        joined_date: string,
        dob: string,
        address: string,
        contact_no: string,
        email: string,
        role: string,
        fields: number
    ) {
        this.id = id;
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
    }
}
