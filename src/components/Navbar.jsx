"use client";
import Image from "next/image";
import filter from "/public/filter.svg";
import { Cards } from "@/components/SectionCards";
import { SearchBar } from "./SearchBar";
import { FilterFrame } from "@/components/FilterFrame";
import Link from "next/link";
export function Navbar({
  items,
  productData,
  setFilterData,
  filterFrameData,
  type,
  setType,
  setSelectedFilters,
  selectedFilters,
  style,
  setStyle,
  bool,
  setBool,
  leftInput,
  setLeftInput,
  rightInput,
  setRightInput,
  typeResult,
  setTypeResult,
}) {
  function toggleClass(bool) {
    if (bool === true) {
      setStyle("z-10");
    } else if (bool === false) {
      setStyle("hidden");
    }
  }

  function set(type, selectedFilters, leftInput, rightInput) {
    if (selectedFilters.length > 0 && type != null) {
      let tempItems = selectedFilters.flatMap((selectedCategory) => {
        let temp = productData.filter(
          (item) => item.brand === selectedCategory
        );
        let hasType = temp.filter((item) => item.section === type);
        let price = hasType.filter(
          (item) => item.price >= leftInput && item.price <= rightInput
        );
        setFilterData(price);
      });
    } else if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.flatMap((selectedCategory) => {
        let temp = productData.filter(
          (item) => item.brand === selectedCategory
        );
        let price = temp.filter(
          (item) => item.price >= leftInput && item.price <= rightInput
        );
        return price;
      });
      if (type != null) {
        let hasType = tempItems.filter((item) => item.section === type);
        let price = hasType.filter(
          (item) => item.price >= leftInput && item.price <= rightInput
        );
        setFilterData(price);
      } else {
        setFilterData(tempItems);
      }
    } else if (type != null) {
      let hasType = productData.filter((item) => item.section === type);
      let price = hasType.filter(
        (item) => item.price >= leftInput && item.price <= rightInput
      );
      setFilterData(price);
    } else if (selectedFilters.length == 0 && type == null) {
      let price = productData.filter(
        (item) => item.price >= leftInput && item.price <= rightInput
      );
      setFilterData(price);
    }
  }

  return (
    <div className="flex relative before: none flex-col justify-center items-center w-full gap-10">
      <FilterFrame
        filterFrameData={filterFrameData}
        productData={productData}
        style={style}
        setFilterData={setFilterData}
        type={type}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
        leftInput={leftInput}
        setLeftInput={setLeftInput}
        rightInput={rightInput}
        setRightInput={setRightInput}
        typeResult={typeResult}
        set={set}
      />
      <div className="flex flex-row justify-center items-center w-full border-b border-gray-700">
        <div className="flex flex-row justify-between items-center w-11/12 pt-6 pb-6">
          <h1 className="text-gray-700 font-poppins text-xl font-semibold hover:cursor-pointer">
            REP.CLOTHING
          </h1>
          <div className="flex flex-row justify-center items-center ">
            <SearchBar
              productData={productData}
              setFilterData={setFilterData}
            />
            <div
              onClick={() => {
                setBool(!bool);
                toggleClass(bool);
              }}
              className="flex flex-row justify-center items-center gap-2 p-2 rounded-r-3xl border border-black border-1 hover:cursor-pointer"
            >
              <Image
                src={filter}
                width={24}
                height={24}
                alt="|Filter Link"
              ></Image>
              <h2 className="text-gray-700 font-inter text-base font-normal">
                Filters
              </h2>
            </div>
          </div>
          <Link
            href="/shopCart"
            className="flex flex-row justify-center items-center font-semibold text-lg text-primary"
          >
            <h1>Košík</h1>
          </Link>
        </div>
      </div>
      <Cards
        items={items}
        setType={setType}
        type={type}
        setFilterData={setFilterData}
        productData={productData}
        selectedFilters={selectedFilters}
        leftInput={leftInput}
        rightInput={rightInput}
        typeResult={typeResult}
        setTypeResult={setTypeResult}
        set={set}
      />
    </div>
  );
}
