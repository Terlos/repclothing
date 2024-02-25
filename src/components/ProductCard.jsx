import Image from "next/image";
import { useCardContext } from "../context/CardContext";
export function ProductCard({ filterData }) {
  const { handleCardChange } = useCardContext();
  return (
    <div className="grid gap-10 px-10 md:px-20 sm:px-10 sm:grid-cols-2 md:grid-cols-4 pt-14 pb-12 w-full">
      {filterData.map((item) => {
        return (
          <div
            //href={{
            //  pathname: `/product/${item.id}`,
            // }}
            key={item.id}
            className="flex flex-col justify-center items-center gap-6 rounded-lg border border-gray-300 bg-white p-4"
          >
            <div className="flex flex-col justify-center items-center bg-cover relative w-full h-72">
              <Image
                className="bg-cover rounded-lg"
                src={item.imageSrc}
                fill={true}
                alt="gg"
              />
            </div>
            <div className="flex flex-row justify-between items-end w-full">
              <div className="flex flex-col justify-center items-start w-full gap-1">
                <div className="flex flex-row justify-start items-center w-full">
                  <h2 className="text-base">{item.name}</h2>
                </div>
                <div>
                  <h3 className="font-normal text-sm">${item.price}</h3>
                </div>
              </div>
              <button className="border px-2 py-1 rounded-lg hover:border-gray-700" onClick={() => {handleCardChange(item), alert("Produk byl přidán do košíku")}}>Přidat</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
