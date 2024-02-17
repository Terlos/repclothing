"use client";
import Image from "next/image";
import arrowLeft from "/public/arrowLeft.svg";
import arrowRight from "/public/arrowRight.svg";

export function Cards({
  items,
  productData,
  setType,
  setFilterData,
  selectedFilters,
  set,
  setTypeResult,
  leftInput,
  rightInput,
}) {
  function filterHandler(filters) {
    const filteredData = productData.filter((item) => item.section === filters);
    setTypeResult(filteredData);
    if (selectedFilters.length > 0) {
      setType(filters);
      set(filters, selectedFilters, leftInput, rightInput);
    } else {
      setFilterData(filteredData);
      setType(filters);
    }
  }

  return (
    <div className="flex flex-row justify-between items-center w-4/5 gap-4">
      <div className="rounded-full border-solid border-2 pt-4 pb-4 pr-5 pl-5 hover:cursor-pointer">
        <Image alt="arrowLeft" src={arrowLeft}></Image>
      </div>
      <div className="flex flex-row justify-between items-end w-full">
        {items.map(({ id, name, icon, filters }) => {
          return (
            <div
              key={id}
              onClick={() => filterHandler(filters)}
              className="flex flex-col justify-center items-center gap-1 hover:cursor-pointer"
            >
              <Image className="text-gray-700" alt={name} src={icon}></Image>
              <h3 className="text-gray-700">{name}</h3>
            </div>
          );
        })}
      </div>
      <div className="rounded-full border-solid border-2 pt-4 pb-4 pr-5 pl-5 hover:cursor-pointer">
        <Image alt="arrowRight" src={arrowRight}></Image>
      </div>
    </div>
  );
}
