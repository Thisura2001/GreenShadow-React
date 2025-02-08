
export default class Crop {
    cropId:number
    commonName: string;
    scientificName: string;
    cropImg: string;
    category: string;
    season: string;
    fieldId: number;

    constructor(
        cropId:number,
        commonName: string,
        scientificName: string,
        cropImg: string,
        category: string,
        season: string,
        fieldId: number
    ) {
        this.cropId = cropId;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.cropImg = cropImg;
        this.category = category;
        this.season = season;
        this.fieldId = fieldId;
    }
}