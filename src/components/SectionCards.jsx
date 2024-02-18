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
    <div className="flex flex-row justify-between items-center w-3/4 gap-4">
      <div className="grid gap-10 grid-cols-4 sm:grid-cols-5 xl:grid-cols-13 w-full">
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
    </div>
  );
}
