"use client";
import { FieldValues, useForm } from "react-hook-form";
import QRCode from "qrcode.react";
import { Button, TextInput } from "@tremor/react";

export default function Home() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const generatedQR = watch("generatedQR");

  const onSubmit = (data: FieldValues) => {
    setValue("generatedQR", data.inputLink);
  };

  return (
    <main className="bg-tremor-background-emphasis flex min-h-screen flex-col items-center justify-center p-24">
      <div className="p-4 flex flex-col items-center justify-center w-4/5 gap-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex items-center gap-5">
            <TextInput
              placeholder="Enter your link"
              {...register("inputLink", { required: "Link is required" })}
            />

            <div className="">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Generate QR Code
              </Button>
            </div>
          </div>
        </form>

        {generatedQR && (
          <div className="mb-8">
            <QRCode value={generatedQR} size={256} />
          </div>
        )}
      </div>
    </main>
  );
}
