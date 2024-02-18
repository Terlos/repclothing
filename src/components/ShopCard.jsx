"use client"
import Image from "next/image";
import { useCardContext } from "../context/CardContext";

export function ShopCard(){
    const { cart, handleCardDelete, increasePrice, decreasePrice } = useCardContext();
    return(
        <div className="grid gap-10 px-10 md:px-20 sm:px-10 sm:grid-cols-2 md:grid-cols-4 pt-14 pb-12 w-full">
      {cart.map((item) => {
        return (
          <div
            //href={{
            //  pathname: `/product/${item.id}`,
            // }}
            key={item.id}
            className="flex flex-col justify-center items-start gap-6 rounded-lg border border-gray-300 bg-white p-4"
          >
            <div className="flex flex-col justify-center items-center relative bg-cover w-full">
              <Image
                className="bg-cover"
                src={item.imageSrc}
                alt="gg"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-row justify-between items-end w-full">
              <div className="flex flex-col justify-center items-start w-full gap-3">
                <div className="flex flex-row justify-start items-center w-full">
                  <h2 className="text-base">{item.name}</h2>
                </div>
                <div>
                  <h3 className="font-normal text-sm">${item.price * item.amount}</h3>
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className="flex justify-center items-center px-2 border rounded-full text-gray-700 hover:border-gray-700" onClick={() => decreasePrice(item)}>-</button>
                    <h1 className="text-gray-700">{item.amount}</h1>
                    <button  className="flex justify-center items-center px-2 border rounded-full text-gray-700 hover:border-gray-700" onClick={() => increasePrice(item)}>+</button>
                </div>
              </div>
              <div>
                <button className="border px-2 py-1 rounded-lg hover:border-gray-700" onClick={() => handleCardDelete(item)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    )
}