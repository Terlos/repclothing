import { supabase } from "@/lib/supabase";
export default async function ProductDetails({ params }) {
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", params.id);
  console.log(data);
  return <div>{params.id}</div>;
}
