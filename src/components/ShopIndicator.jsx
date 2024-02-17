"use client"
import { useCardContext } from "@/context/CardContext";
export function ShopIndicator(){
    const { cart } = useCardContext();
    return(
        <>
        {cart.length != 0 ? (
        <p className="font-semibold text-gray-700 text-lg">
          Celková cena: {cart.reduce((p, c) => p + c.amount * c.price, 0)}$
        </p>
      ) : null}

      {cart.length == 0 ? (
        <p className="font-semibold text-gray-700 text-lg">Košík je prázdný</p>
      ) : null}
        </>
    )
}