 import { useState } from "react";

export default function ImageUpload({

label,

onChange

}){


const [preview,setPreview]=useState(null);


const handleChange=(e)=>{

const file=e.target.files[0];

if(file){

setPreview(

URL.createObjectURL(file)

);

onChange(file);

}

};


return(

<div className="flex flex-col gap-2">

{label && (

<label className="text-sm font-medium">

{label}

</label>

)}

<input

type="file"

accept="image/*"

onChange={handleChange}

/>


{preview && (

<img

src={preview}

className="

w-32

h-32

object-cover

rounded

border

"

/>

)}

</div>

);

}