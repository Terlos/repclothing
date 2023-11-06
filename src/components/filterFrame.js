import { useEffect, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"


export default function filterFrame({filterFrameData, style, productData, setFilterData, type, selectedFilters, setSelectedFilters, leftInput, rightInput, setLeftInput, setRightInput, typeResult, set}){
    

    const handleFilterButtonClick = (selectedCategory) => {
        if(selectedFilters.includes(selectedCategory)){
           const result = selectedFilters.filter((el) => el !== selectedCategory)
            setSelectedFilters(result);
        }else{
            setSelectedFilters([...selectedFilters, selectedCategory])
        }
    }

    



    /* useEffect(() => {
        filterItems();
    }, [selectedFilters, type, leftInput, rightInput]);
    
    function filterItems() {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.flatMap((selectedCategory) => {
                let temp = productData.filter((item) => item.brand === selectedCategory);
                let price = temp.filter((item) => item.price >= leftInput && item.price <= rightInput);
                return price;
            });
            if(type != null){
                let hasType = tempItems.filter((item) => item.section === type);
                let price = hasType.filter((item) => item.price >= leftInput && item.price <= rightInput);
                setFilterData(price);
            }else{
                setFilterData(tempItems);
            }
    } 
    }
    */


    return(
        <div className={`flex absolute ${style} top-20 bg-white flex-col gap-10 border border-solid p-4 rounded-lg`}>
            <div className="flex flex-col gap-10">
                <div>
                    <h1>Price Range</h1>
                </div>
                <div>
                <Slider defaultValue={[0, 100]} value={[leftInput, rightInput]} minStepsBetweenThumbs={[5]} onValueChange={(e) => {
                setLeftInput(e[0])
                setRightInput(e[1])
                }} step={1} />
                </div>       
        <div className="flex flex-row justify-center items-center gap-4">
            <Input className="text-gray-700" type="number" placeholder="Minimum" value={leftInput} onChange={(e) => {setLeftInput(e.target.value)
            }}/>
            <p className="text-gray-700">-</p>
            <Input className="text-gray-700" type="number" placeholder="Maximum" value={rightInput} onChange={(e) => {setRightInput(e.target.value)
            }}/>
        </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-6 ">
                <div>
                <h1 className="text-gray-700">Brands</h1>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {filterFrameData.map(({id, name, category}) =>(
                        <div key={id} className="flex flex-row justify-start items-center gap-2">
                        <Checkbox onClick={() => handleFilterButtonClick(category)}/>
                        <h2 className="text-gray-700">{name}</h2>
                    </div>
                    ))}
                </div>
                <div className="flex flex-row justify-end items-center w-full">
                <button className="cursor-pointer border border-solid p-2 rounded-lg bg-white text-gray-700" onClick={() => set(type, selectedFilters, leftInput, rightInput)}>Set filters</button>
                </div>
            </div>
        </div>
    )
}

