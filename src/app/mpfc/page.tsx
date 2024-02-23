"use client";
import semesterList from "@/data/lists/semester-list";
import React, { useState } from "react";
import fcData from "../../components/SearchListeZone/Components/fc.json";
import Navbar from "@/components/Navbar/Navbar";
import FiltersSideBar from "@/components/FiltersSideBar/FiltersSideBar";
import FcGrid from "@/components/FcCard/Components/FcGrid";
import priorityList from "@/data/lists/priority-list";
export default function page() {
  const listOfOptions: FilterOptions[] = [
    {
      filterName: "semestre",
      title: "semestre",
      type: "dropDown",
      options: semesterList,
    },
    {
      filterName: "type_du_module",
      title: "priority",
      type: "dropDown",
      options: priorityList,
    },
  ];
  const [values, setValues] = useState<FormationFilterType>({
    semestre: [],
    type_du_module: [],
    title: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    document.body.classList.toggle("no-scroll");
  };
  const valueSetter = (atribut: string, value: string | string[]) => {
    setValues((prevValues) => ({
      ...prevValues,
      [atribut]: value,
    }));
  };
  // Update your filteredData logic
  const filteredData =
    values.semestre.length || values.type_du_module.length
      ? fcData.filter((item) => {
          // Check if the item's semestre is included in the selected semestres
          const semestreFilterPassed =
            values.semestre.length === 0 ||
            values.semestre.includes(item.semestre);

          // Check if the item's type_du_module matches the selected type_du_module
          const typeFilterPassed =
            values.type_du_module.length === 0 ||
            values.type_du_module.includes(item.type_du_module);

          // Return true if both conditions are met
          return semestreFilterPassed && typeFilterPassed;
        })
      : fcData;

  return (
    <>
      <Navbar />

      <div className=" mb-[6.25rem] w-[100%] py-[2.25rem] lg:py-[4rem] pl-[0.5rem] pr-[1rem] lg:px-[10.38rem] flex flex-col ">
        <p className="mb-[1.88rem] lg:mb-16 ml-[1.5rem] text-start lg:ml-0 lg:text-start text-[1.375rem] leading-[1.875rem] font-bold text-black md:mb-16 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10 whitespace-nowrap overflow-hidden">
          Master Professionnel en Informatique Appliquée á la Gestion
        </p>

        <div className="w-full  flex">
          <div className="relative w-full hidden lg:block lg:flex-1 ">
            <FiltersSideBar
              listOfOptions={listOfOptions}
              filterValues={values}
              valuesSetter={valueSetter}
            />
          </div>

          <div className="w-full lg:flex-[2] flex-col gap-[1.56rem] ">
            <FcGrid data={filteredData} />
          </div>
        </div>
      </div>
    </>
  );
}
