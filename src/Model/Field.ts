import Crop from "./Crop.ts";

export default class Field {
    fieldId: number;
    fieldName: string;
    location: string;
    extend: string;
    fieldImg1: string;
    fieldImg2: string;
    crops?: Crop[];

    constructor(
        fieldId: number,
        fieldName: string,
        location: string,
        extend: string,
        fieldImg1: string,
        fieldImg2: string,
    ) {
        this.fieldId = fieldId;
        this.fieldName = fieldName;
        this.location = location;
        this.extend = extend;
        this.fieldImg1 = fieldImg1;
        this.fieldImg2 = fieldImg2;
    }
}
