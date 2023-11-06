import Image from "next/image";
import discord from "/public/discord.svg";
import tiktok from "/public/tiktok.svg";
import youtube from "/public/youtube.svg";
import filter from "/public/filter.svg";
import Cards from "@/components/sectionCards";
import Link from "next/link";
import SearchBar from "./searchBar";
import FilterFrame from "@/components/filterFrame";
import { useState } from "react";
export default function Navbar({
  items,
  productData,
  setFilterData,
  filterFrameData,
  type,
  setType,
  setSelectedFilters,
  selectedFilters,
}) {
  const [style, setStyle] = useState("hidden");
  const [bool, setBool] = useState(true);
  function toggleClass(bool) {
    if (bool === true) {
      setStyle("z-10");
    } else if (bool === false) {
      setStyle("hidden");
    }
  }

  const [leftInput, setLeftInput] = useState(0);
  const [rightInput, setRightInput] = useState(100);
  const [typeResult, setTypeResult] = useState();

  function set(type, selectedFilters, leftInput, rightInput) {
    if(selectedFilters.length > 0 && type != null){
        let tempItems = selectedFilters.flatMap((selectedCategory) => {
            let temp = productData.filter((item) => item.brand === selectedCategory);
            let hasType = temp.filter((item) => item.section === type);
            let price = hasType.filter((item) => item.price >= leftInput && item.price <= rightInput);
            setFilterData(price);
          });

    }else if (selectedFilters.length > 0) {
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
          <div className="flex flex-row justify-center items-center gap-8">
            <Link href="https://discord.gg/Tdu6hRR9fn">
              <Image
                className="hover:cursor-pointer"
                src={discord}
                width={26}
                height={26}
                alt="Discord Link"
              ></Image>
            </Link>
            <Link href="https://www.tiktok.com/@rep.clothing?is_from_webapp=1&sender_device=pc">
              <Image
                className="hover:cursor-pointer"
                src={tiktok}
                width={26}
                height={26}
                alt="Favorite Items"
              ></Image>
            </Link>
          </div>
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
