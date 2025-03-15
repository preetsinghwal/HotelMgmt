import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(params) {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins can't be load right now");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {

  //https://lksszjgosnapelrsttpa.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  const hasImage = newCabin?.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', "");

  const imagePath = hasImage ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`

  let query = supabase.from("cabins");

  // 1. Create/Edit Cabin
  if(!id) query = query.insert([{...newCabin, image: imagePath}]);

  if(id) query = query.update({...newCabin, image: imagePath}).eq("id", id);

  const {data, error} = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  //2. Upload Image
  const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)


  //3. Delete the cabin if image upload fails
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded and the cabin was not created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
