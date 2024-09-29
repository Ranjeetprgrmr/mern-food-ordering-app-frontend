import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";




const ImageSection = () => {
    const { control, watch } = useFormContext();

    const existingImageUrl = watch("imageUrl");

  return (
    <div>
         <div>
            <h2 className="text-2xl font-bold">Add Image</h2>
            <FormDescription>
                Add an image that will be displayed on your restaurant listing in the search results.Adding a new image will overwrite the existing one.
            </FormDescription>
         </div>
         <div className="flex flex-col gap-10 md:w-[50%]">
          {existingImageUrl && (
            <AspectRatio ratio={16/9}>
              <img  
               src={existingImageUrl}
               className="mt-8 shadow-md
               rounded-md w-full h-full object-cover"
               />
            </AspectRatio>
          )}
            <FormField
                control={control}
                name="imageFile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-white" 
                        type="file" 
                        accept=".jpg, .jpeg, .png" 
                        onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)}
                      />
                    </FormControl>
                  </FormItem>

                )}
            >
            </FormField>
         </div>
    </div>
  )
}

export default ImageSection;