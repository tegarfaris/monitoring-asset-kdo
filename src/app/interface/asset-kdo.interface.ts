export enum EStatusKDO {
  INUSE = "in-use",
  PARKED = "parked",
}

export interface IAssetKDO {
  id: string;
  namaKendaraan: string;
  tipe: "mobil" | "motor" | "ambulance" | "jeep" | "truk";
  ccKendaraan: "";
  tahunPerolehan: number | string;
  kodeBarang: string;
  nomorPabrik: string;
  nomorRangka: string;
  nomorMesin: string;
  nomorBPKB: string;
  caraPerolehan: "hibah" | "apbd" | "pertukaran" | "gabungan";
  kondisiKendaraan: "BAIK" | "RUSAK RINGAN" | "RUSAK BERAT";
  imageBuktiFisikLegal: string;
  harga: string;
  nomorPolisi: string;
  status: EStatusKDO;
  coordinates: { latitude: number; longitude: number };
  asalSKPD:
    | "BPKAD"
    | "DINAS KESEHATAN"
    | "DINAS SOSIAL"
    | "BAPPEDA"
    | "BAPENDA"
    | "DINAS PENDIDIKAN";
  nomorRegistrasi: string;
}
