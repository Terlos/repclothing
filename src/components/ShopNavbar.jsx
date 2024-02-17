import Link from "next/link";
export function ShopNavbar() {
  return (
    <div className="flex relative before: none flex-col justify-center items-center w-full gap-10">
      <div className="flex flex-row justify-center items-center w-full border-b border-gray-700 h-[90px]">
        <div className="flex flex-row justify-between items-center w-11/12 pt-6 pb-6">
        <Link href="/">
        <h1 className="text-gray-700 font-poppins text-xl font-semibold hover:cursor-pointer">
            REP.CLOTHING
          </h1>
              </Link>
          <div className="flex flex-row justify-center items-center ">
            <div
              href="/shopCart"
              className="flex flex-row justify-center items-center font-semibold text-lg text-primary gap-6"
            >
              <Link href="/">
                <h1 className="text-gray-700 font-poppins text-xl font-semibold hover:cursor-pointer">
                  Produkty
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
