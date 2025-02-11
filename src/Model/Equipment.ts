import {EquipmentType} from "../Enum/EquipmentType.ts";
import {Status} from "../Enum/Status.ts";

export default class Equipment {
    eqId:number;
    name: string;
    equipmentType: EquipmentType;
    status: Status;
    staffId: number;
    field: number;

    constructor(
        eqId:number,
        name: string,
        equipmentType: EquipmentType,
        status: Status,
        staffId: number,
        field: number
    ) {
        this.eqId = eqId;
        this.name = name;
        this.equipmentType = equipmentType;
        this.status = status;
        this.staffId = staffId;
        this.field = field;
    }
}
