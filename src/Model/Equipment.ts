

export default class Equipment {
    eqId:number;
    name: string;
    equipmentType: string;
    status: string;
    staffId: number;
    fieldId: number;

    constructor(
        eqId:number,
        name: string,
        equipmentType: string,
        status: string,
        staffId: number,
        fieldId: number
    ) {
        this.eqId = eqId;
        this.name = name;
        this.equipmentType = equipmentType;
        this.status = status;
        this.staffId = staffId;
        this.fieldId = fieldId;
    }
}
