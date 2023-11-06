"use client"
import Image from "next/image"
import search from "/public/search.svg"
import { useState } from "react"

export default function SearchBar({productData, setFilterData}){

    const [activeSearch, setActiveSearch] = useState([]);
    const handleSearch = (e) =>{
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        const result = productData.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 6);
        setActiveSearch(result);
    }

    function handlerSubmit(searchResult){
    setFilterData(searchResult);
    }

    function searchOptions(option){
        const result = productData.filter(product => product.title == option);
        setFilterData(result);
    }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            handlerSubmit(activeSearch);
        }} className="flex relative flex-row justify-center items-center gap-2 p-2 rounded-l-3xl border border-black border-1">
        <Image src={search} width={24} height={24} alt="Discord Link"></Image>
        <input onChange={(e) => handleSearch(e)} className="text-gray-700 font-poppins text-base font-normal outline-none" placeholder="Search by name"></input>
        {
            activeSearch.length > 0 && (
                <div className="flex flex-col gap-2 absolute top-12 p-4  bg-slate-400 text-white w-full rounded">
                    {
                        activeSearch.map(item => {
                            return(
                                <span className="cursor-pointer"
                                key={item.id} 
                                onClick={() => searchOptions(item.title)} 
                                >{item.title}</span>
                            )
                        })
                    }
        </div>
            )
        }
        </form>
    )
}