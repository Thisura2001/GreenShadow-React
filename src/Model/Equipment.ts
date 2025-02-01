import {EquipmentType} from "../Enum/EquipmentType.ts";
import {Status} from "../Enum/Status.ts";
import Staff from "./Staff.ts";
import Field from "./Field.ts";

export default class Equipment {
    name: string;
    equipmentType: EquipmentType;
    status: Status;
    staffId: Staff;
    field: Field;

    constructor(
        name: string,
        equipmentType: EquipmentType,
        status: Status,
        staffId: Staff,
        field: Field
    ) {
        this.name = name;
        this.equipmentType = equipmentType;
        this.status = status;
        this.staffId = staffId;
        this.field = field;
    }
}
