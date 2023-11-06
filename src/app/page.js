import LandingPage from "@/components/landingPage";
import { adminClient, supabase } from "@/lib/supabase";

export default async function Home() {

  const { data, error } = await supabase
  .from('products')
  .select('*')
  .range(0, 25)
  return (
    <main className="flex flex-col justify-center items-center w-full pb-4">
      <LandingPage data={data}/>
    </main>
  );
}
