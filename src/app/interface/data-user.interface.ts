export interface IUser {
  asalSKPD:
    | "BPKAD"
    | "DINAS KESEHATAN"
    | "DINAS SOSIAL"
    | "BAPPEDA"
    | "BAPENDA"
    | "DINAS PENDIDIKAN";
  nip: string;
  nama: string;
  nomorTelephone: string;
  jabatan: string;
  email: string;
  username: string;
  alamat: string;
}
