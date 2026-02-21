 export default function Input({

label,

name,

value,

onChange,

type="text",

placeholder,

required=false

}){

return(

<div className="flex flex-col gap-1">

{label && (

<label className="text-sm font-medium">

{label}

</label>

)}

<input

name={name}

type={type}

value={value}

onChange={onChange}

placeholder={placeholder}

required={required}

className="

border

rounded

px-4

py-2

focus:outline-none

focus:ring-2

focus:ring-blue-500

"

/>

</div>

);

}