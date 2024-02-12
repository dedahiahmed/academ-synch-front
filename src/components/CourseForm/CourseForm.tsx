"use client";
import React, { useState } from "react";
import DropDown from "../DropDownInput/DropDownInput";
import semesterList from "@/data/lists/semester-list";
import courseType from "@/data/lists/type-list";
import FileInput from "../FileInput/FileInput";
import { filesTypeList } from "@/data/data-base/file-types/file-types";
import { FormProvider, useForm } from "react-hook-form";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

export default function CourseForm() {
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<courseType>({ mode: "all" });
  const { register, handleSubmit, formState, reset, control } = form;
  const { errors } = formState;
  return (
    <div className="bg-gray-100">
      {" "}
      <BrowserRouter>
        {" "}
        <Navbar />
      </BrowserRouter>
      <p className="text-xl text-black font-normal  flex justify-start items-start bg-gray-100  mt-[1rem] ml-[5rem]">
        Ajouter un Cours
      </p>
      <div className="w-full px-[20rem] h-full bg-gray-100 pb-[3rem] py-[1rem]  ">
        <FormProvider {...form}>
          <form
            className=" mt-[1.25rem] lg:mt-[2.5rem] space-y-4 bg-white rounded shadow-lg p-4 px-4 w-full h-full "
            noValidate
          >
            {/*name*/}

            {/* founded*/}

            {/*City */}
            <div className="flex flex-col  gap-[0.5rem] ">
              <p className=" mb-[0.37rem] font-text text-[0.875rem] font-[500] leading-[1.375rem]  lg:mb-[0.5rem] lg:text-[0.9375rem] lg:leading-[1.25rem]">
                Semestre
              </p>
              <DropDown
                placeHolder="Sélectionner un semestre."
                requiredMessage="Vous devez choisir le semestre."
                name="city"
                list={semesterList}
              />
            </div>
            {/*industry */}
            <div className="flex flex-col  gap-[0.5rem] ">
              <p className=" mb-[0.37rem] font-text text-[0.875rem] font-[500] leading-[1.375rem]  lg:mb-[0.5rem] lg:text-[0.9375rem] lg:leading-[1.25rem]">
                Type du document :
              </p>
              <DropDown
                placeHolder="Sélectionner un le type du document."
                requiredMessage=" Vous devez sélectionner le secteur d'activité de votre entreprise."
                name="Type"
                list={courseType}
              />
            </div>
            {/* <div className="flex flex-col  gap-[0.5rem] ">
            <p className="  font-text text-[0.875rem] font-[500] leading-[1.375rem]  lg:mb-[0.5rem] lg:text-[0.9375rem] lg:leading-[1.25rem]">
              Description sur le support :
            </p>
            <textarea
              placeholder="Décrivez brièvement votre entreprise."
              className="
        mb-[0.37rem] flex h-[11.375rem] w-full  items-center gap-[0.625rem] rounded-lg border
        border-stone-900 py-[0.3125rem] pl-[0.625rem] pr-[1.5rem] font-text  csm:w-[20.625rem] lg:mb-[0.5rem]  lg:h-[11.5625rem]  lg:gap-[0.625rem] lg:py-[0.9375rem] lg:pl-[0.625rem] lg:pr-[2.5rem]"
            />
          </div> */}
            <div className="flex flex-col  gap-[0.5rem] ">
              {" "}
              <p className=" mb-[0.37rem] font-text text-[0.875rem] font-[500] leading-[1.375rem]  lg:mb-[0.5rem] lg:text-[0.9375rem] lg:leading-[1.25rem]">
                Fichier(s) :
              </p>
              <FileInput
                acceptedTypes={filesTypeList}
                limit={true}
                valueSetter={setFiles}
                files={files}
              />
            </div>

            <button
              className="mb-[1.25rem] w-[100%] inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 px-[2.25rem] py-[0.9375rem]
"
            >
              <p className="font-text text-[0.9375rem] font-[500] leading-[1.375rem] text-white lg:text-[1.125rem] lg:leading-[1.625rem]">
                Ajouter
              </p>
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
