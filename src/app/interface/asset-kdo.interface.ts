export enum EStatusKDO {
    INUSE = "in-use",
    INDICATE_TO_VIOLATION = "indicate to violation",
    PARKED = "parked"
}

export interface IAssetKDO {
    id:string;
    vehicleName: string;
    tipe: "mobil" | "motor";
    numberPlate: string;
    status: EStatusKDO;
    coordinates: {latitude: number, longitude: number}
}