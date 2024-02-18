"use client";
import Image from "next/image";
import search from "/public/search.svg";
import { useState } from "react";

export function SearchBar({ productData, setFilterData }) {
  const [activeSearch, setActiveSearch] = useState([]);
  const [clear, setClear] = useState("");
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      setFilterData(productData);
      return false;
    }
    if(clear == ""){
    const result = productData
      .filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .slice(0, 6);
    setActiveSearch(result);
  }
  };

  function handlerSubmit(searchResult) {
    setFilterData(searchResult);
  }

  function searchOptions(option) {
    const result = productData.filter((product) => product.name == option);
    setFilterData(result);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlerSubmit(activeSearch);
      }}
      className="flex relative flex-row justify-center items-center gap-2 p-2 rounded-l-3xl border border-black border-1"
    >
      <Image src={search} width={24} height={24} alt="Discord Link"></Image>
      <input
        type="text"
        value={clear}
        onChange={(e) => {handleSearch(e), setClear(e.target.value)}}
        className="text-gray-700 font-poppins text-base font-normal outline-none"
        placeholder="Search by name"
      ></input>
      {activeSearch.length > 0 && (
        <div className="flex flex-col gap-2 absolute top-12 p-4  bg-white text-gray-700 w-full rounded border border-gray-700">
          {activeSearch.map((item) => {
            return (
              <span
                className="flex justify-start items-center cursor-pointer hover:border rounded-lg h-8 pl-1"
                key={item.id}
                onClick={() => {searchOptions(item.name), setActiveSearch([]), setClear("")}}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      )}
    </form>
  );
}
