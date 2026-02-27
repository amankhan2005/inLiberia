 export default function UserRow({

  user,

  onDelete

}) {

  return (

<tr className="border-b hover:bg-gray-50">


<td className="p-3">

{user.name}

</td>



<td>

{user.email}

</td>



<td>

{user.role}

</td>



{/* ⭐ NEW COLUMN → VERIFY STATUS */}

<td>

{user.isVerified ? (

<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">

✅ Verified

</span>

) : (

<span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">

❌ Unverified

</span>

)}

</td>





<td>


<button

onClick={() => onDelete(user._id)}

className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"

>

Delete

</button>


</td>



</tr>

  );

}