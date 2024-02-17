"use client";
import { Navbar } from "@/components/Navbar";
import { SECTION_CARDS } from "@/data/sectionCard";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { FILTER_FRAME } from "@/data/filterFrameData";

export function LandingPage({ data }) {
  const [filterData, setFilterData] = useState(data);
  const [type, setType] = useState();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [style, setStyle] = useState("hidden");
  const [bool, setBool] = useState(true);
  const [leftInput, setLeftInput] = useState(0);
  const [rightInput, setRightInput] = useState(100);
  const [typeResult, setTypeResult] = useState();
  return (
    <div className="w-full">
      <Navbar
        items={SECTION_CARDS}
        productData={data}
        setFilterData={setFilterData}
        filterFrameData={FILTER_FRAME}
        type={type}
        setType={setType}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
        style={style}
        setStyle={setStyle}
        bool={bool}
        setBool={setBool}
        leftInput={leftInput}
        setLeftInput={setLeftInput}
        rightInput={rightInput}
        setRightInput={setRightInput}
        typeResult={typeResult}
        setTypeResult={setTypeResult}
      />

      <ProductCard productData={data} filterData={filterData} />
    </div>
  );
}
