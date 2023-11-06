"use client"
import Navbar from "@/components/navbar";
import sectionCard from "@/data/sectionCard";
import ProductCard from "@/components/productCard";
import { useState } from "react";
import filterFrameData from "@/data/filterFrameData";
import { useEffect } from "react";

export default function LandingPage({data}){
    

  const [filterData, setFilterData] = useState(data);
  const [type, setType] = useState();
  const [selectedFilters, setSelectedFilters] = useState([]);

    return(
        <div className="w-full">
            <Navbar
        items={sectionCard}
        productData={data}
        setFilterData={setFilterData}
        filterFrameData={filterFrameData}
        type={type}
        setType={setType}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />

      <ProductCard
        productData={data}
        filterData={filterData}
      />
        </div>
    )
}

/* else{
    if(type == null){
        let price = productData.filter((item) => item.price >= leftInput && item.price <= rightInput);
        setFilterData(price);
    }else{
        console.log(type);
        console.log("gg");
    }
} */