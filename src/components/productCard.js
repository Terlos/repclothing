import Image from "next/image";
import { adminClient, supabase } from "@/lib/supabase";

export default function ProductCard({ filterData}) {

    return (
        <div className="grid grid-cols-4 gap-10 px-10 md:px-20 sm:grid-cols-2 md:grid-cols-4 pt-14 pb-12 w-full">
            {filterData.map(({ id, price, name, imageSrc}) => {
                return (
                    <div key={id} className="flex flex-col justify-center items-start gap-6 rounded-lg border border-gray-300 bg-white p-4">
                        <div className="flex flex-col justify-center items-center w-full relative">
                                <Image src={imageSrc} alt="gg" width={300} height={300} />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full gap-1">
                            <div className="flex flex-row justify-start items-center w-full">
                                <h2 className="text-base">{name}</h2>
                            </div>
                            <div>
                                <h3 className="font-normal text-sm">${price}</h3>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
