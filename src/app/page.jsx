import { LandingPage } from "@/components/LandingPage";
import { adminClient, supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, section, brand, link, imageSrc, amount");
  console.log("Error:", error);
  return (
    <main className="flex flex-col justify-center items-center w-full pb-4">
      <LandingPage data={data} />
    </main>
  );
}
