import { EStatusKDO } from "../interface/asset-kdo.interface";

export const renderKDOStatus = (status: EStatusKDO) => {
    let text;
    let color;
    switch (status) {
      case EStatusKDO.INUSE:
        color = "monika-warning";
        text = "Diluar";
        break;
      case EStatusKDO.PARKED:
        color = "monika-success";
        text = "Dikantor";
        break;
      case EStatusKDO.INDICATE_TO_VIOLATION:
        color = "monika-danger";
        text = "Indikasi Pelanggaran";
        break;
    }
    return { color, text };
  };