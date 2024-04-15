import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("cabin could not be loaded");
  }
 
  return data;
}

export async function getCabin(id) {
  try {
    const { data: cabin, error } = await supabase
      .from("cabins")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      throw new Error("cabin not found");
    }

    return cabin;
  } catch (error) {
    return null
  }
}
