import supabase from "./supabase";

export async function getCabins(params) {
  const { data, error } = await supabase.from("cabins").select("*");

  if(error) {
    console.log(error);
    throw new Error("Cabins can't be load right now");
  }

  return data;
}
