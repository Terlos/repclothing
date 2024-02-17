"use client"
import Image from "next/image";
import { useCardContext } from "../context/CardContext";

export function ShopCard(){
    const { cart, handleCardDelete, increasePrice, decreasePrice } = useCardContext();
    return(
        <div className="grid grid-cols-4 gap-10 px-10 md:px-20 sm:grid-cols-2 md:grid-cols-4 w-full">
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
              <div className="flex flex-col justify-center items-start w-full gap-1">
                <div className="flex flex-row justify-start items-center w-full">
                  <h2 className="text-base">{item.name}</h2>
                </div>
                <div>
                  <h3 className="font-normal text-sm">${item.price * item.amount}</h3>
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                    <button onClick={() => decreasePrice(item)}>-</button>
                    <h1>{item.amount}</h1>
                    <button onClick={() => increasePrice(item)}>+</button>
                </div>
              </div>
              <div>
                <button onClick={() => handleCardDelete(item)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    )
}