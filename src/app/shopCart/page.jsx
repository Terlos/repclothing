import { ShopNavbar } from "@/components/ShopNavbar";
import  { ShopCard } from "@/components/ShopCard";
import { ShopIndicator } from "@/components/ShopIndicator";
export default function ShopCart() {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <ShopNavbar />
      <ShopIndicator />
      <ShopCard />
    </div>
  );
}
