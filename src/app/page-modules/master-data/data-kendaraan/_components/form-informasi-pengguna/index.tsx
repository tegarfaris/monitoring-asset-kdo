import { InputField } from "@/monitoring/app/components";
import InputTextArea from "@/monitoring/app/components/inputTextArea";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const FormInformasiPengguna = () => {
  const methods = useForm({});

  return (
    <FormProvider {...methods}>
      <InputField
        id="asalSKPD"
        name="asalSKPD"
        label="Asal SKPD"
        type="text"
        required
      />
      <InputField id="nip" name="nip" label="NIP" type="text" required />

      <InputField id="nama" name="nama" label="Nama" type="text" required />
      <InputField
        id="nomorTelephone"
        name="nomorTelephone"
        label="Nomor Telephone"
        type="number"
        required
      />
      <InputField
        id="jabatan"
        name="jabatan"
        label="Jabatan"
        required
        type="text"
      />
      <InputField id="email" name="email" label="Email" type="email" required />
      <InputTextArea id="alamat" name="alamat" label="Alamat" required />
    </FormProvider>
  );
};

export default FormInformasiPengguna;
