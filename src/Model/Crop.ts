import Field from "./Field.ts";

export default class Crop {
    commonName: string;
    scientificName: string;
    cropImg: string;
    category: string;
    season: string;
    field: Field;

    constructor(
        commonName: string,
        scientificName: string,
        cropImg: string,
        category: string,
        season: string,
        field: Field
    ) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.cropImg = cropImg;
        this.category = category;
        this.season = season;
        this.field = field;
    }
}