 export default function Select({

label,

name,

value,

onChange,

options=[],

required=false

}){

return(

<div className="flex flex-col gap-1">

{label && (

<label className="text-sm font-medium">

{label}

</label>

)}

<select

name={name}

value={value}

onChange={onChange}

required={required}

className="

border

rounded

px-4

py-2

focus:ring-2

focus:ring-blue-500

"

>

<option value="">

Select

</option>


{options.map(option=>(

<option

key={option._id}

value={option._id}

>

{option.name}

</option>

))}

</select>

</div>

);

}