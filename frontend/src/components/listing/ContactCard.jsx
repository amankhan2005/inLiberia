//  import { useState, useEffect } from "react";
// import API from "../../services/api";

// export default function ContactCard({ listing }) {

//   const [open, setOpen] = useState(false);

//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({

//     visitorName: "",

//     visitorEmail: "",

//     subject: "",

//     message: ""

//   });


//   // ESC key close

//   useEffect(() => {

//     const handleEsc = (e) => {

//       if (e.key === "Escape")

//         setOpen(false);

//     };

//     window.addEventListener("keydown", handleEsc);

//     return () =>
//       window.removeEventListener("keydown", handleEsc);

//   }, []);



//   const handleChange = (e) => {

//     setForm({

//       ...form,

//       [e.target.name]: e.target.value

//     });

//   };


//   const validateEmail = (email) => {

//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   };


//   const handleSend = async () => {

//     if (

//       !form.visitorName ||

//       !form.visitorEmail ||

//       !form.subject ||

//       !form.message

//     )

//       return alert("Please fill all fields");


//     if (!validateEmail(form.visitorEmail))

//       return alert("Enter valid email");


//     setLoading(true);


//     try {

//       await API.post("/contact", {

//         ownerEmail: listing.contactEmail,

//         visitorName: form.visitorName,

//         visitorEmail: form.visitorEmail,

//         subject: form.subject,

//         message: form.message,

//         listingTitle: listing.title,

//         listingId: listing._id,

//       });


//       alert("Enquiry sent successfully");


//       setOpen(false);


//       setForm({

//         visitorName: "",

//         visitorEmail: "",

//         subject: "",

//         message: ""

//       });

//     }

//     catch {

//       alert("Failed to send enquiry");

//     }


//     setLoading(false);

//   };


//   return (

//     <div className="bg-white shadow rounded-xl p-6">


//       <h3 className="font-semibold mb-4">

//         Contact Owner

//       </h3>


//       <p className="text-sm">

//         📧 {listing.contactEmail}

//       </p>


//       <p className="text-sm">

//         📞 {listing.contactPhone}

//       </p>


//       <button

//         onClick={() => setOpen(true)}

//         className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"

//       >

//         Send Message

//       </button>



//       {/* MODAL */}


//       {open && (

//         <div

//           className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 transition"

//           onClick={() => setOpen(false)}

//         >


//           {/* BOX */}


//           <div

//             className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg"

//             onClick={(e) => e.stopPropagation()}

//           >


//             <h2 className="text-xl font-bold mb-4">

//               Send Enquiry

//             </h2>


//             <input

//               name="visitorName"

//               value={form.visitorName}

//               onChange={handleChange}

//               placeholder="Your Name"

//               className="w-full border p-2 mb-3 rounded"

//             />


//             <input

//               name="visitorEmail"

//               value={form.visitorEmail}

//               onChange={handleChange}

//               placeholder="Your Email"

//               className="w-full border p-2 mb-3 rounded"

//             />


//             <input

//               name="subject"

//               value={form.subject}

//               onChange={handleChange}

//               placeholder="Subject"

//               className="w-full border p-2 mb-3 rounded"

//             />


//             <textarea

//               name="message"

//               value={form.message}

//               onChange={handleChange}

//               placeholder="Message"

//               rows="4"

//               className="w-full border p-2 mb-4 rounded"

//             />


//             <button

//               onClick={handleSend}

//               disabled={loading}

//               className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"

//             >

//               {loading

//                 ? "Sending..."

//                 : "Send Message"}

//             </button>


//             <button

//               onClick={() => setOpen(false)}

//               className="w-full mt-2 text-gray-500"

//             >

//               Cancel

//             </button>


//           </div>


//         </div>

//       )}


//     </div>

//   );

// }

 import { useState, useEffect } from "react";
import API from "../../services/api";

import {
EnvelopeIcon,
PhoneIcon,
PaperAirplaneIcon,
XMarkIcon,
CheckCircleIcon,
ExclamationCircleIcon
} from "@heroicons/react/24/outline";


export default function ContactCard({ listing }) {

const [open, setOpen] = useState(false);

const [loading, setLoading] = useState(false);


/* NEW STATE */

const [alert, setAlert] = useState(null);



const [form, setForm] = useState({

visitorName: "",
visitorEmail: "",
subject: "",
message: ""

});



/* AUTO CLOSE ALERT */

useEffect(()=>{

if(alert){

const timer = setTimeout(()=>setAlert(null),3000);

return ()=>clearTimeout(timer);

}

},[alert]);



const handleChange = (e) => {

setForm({

...form,
[e.target.name]: e.target.value

});

};



const validateEmail = (email) => {

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

};



const handleSend = async () => {


if (

!form.visitorName ||

!form.visitorEmail ||

!form.subject ||

!form.message

){

setAlert({

type:"error",

message:"Please fill all fields"

});

return;

}



if (!validateEmail(form.visitorEmail)){

setAlert({

type:"error",

message:"Enter valid email"

});

return;

}



setLoading(true);


try {

await API.post("/contact", {

ownerEmail: listing.contactEmail,

visitorName: form.visitorName,

visitorEmail: form.visitorEmail,

subject: form.subject,

message: form.message,

listingTitle: listing.title,

listingId: listing._id,

});


setAlert({

type:"success",

message:"Enquiry sent successfully"

});


setOpen(false);


setForm({

visitorName: "",
visitorEmail: "",
subject: "",
message: ""

});


}

catch {


setAlert({

type:"error",

message:"Failed to send enquiry"

});

}


setLoading(false);

};




return (

<>


{/* CONTACT CARD */}

<div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6">

<h3 className="font-bold mb-4">

Contact Owner

</h3>


<p className="flex gap-2 items-center text-gray-600">

<EnvelopeIcon className="w-5 text-red-600"/>

{listing.contactEmail}

</p>


<p className="flex gap-2 items-center text-gray-600 mt-2">

<PhoneIcon className="w-5 text-red-600"/>

{listing.contactPhone}

</p>



<button

onClick={() => setOpen(true)}

className="

mt-5 w-full

bg-gradient-to-r

from-red-600 to-red-500

hover:to-red-600

text-white

py-3

rounded-xl

font-semibold

flex justify-center gap-2

"

>

<PaperAirplaneIcon className="w-5"/>

Send Enquiry

</button>


</div>





{/* FORM MODAL */}

{open && (

<div

className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"

onClick={()=>setOpen(false)}

>

<div

className="bg-white p-6 rounded-2xl w-full max-w-md"

onClick={(e)=>e.stopPropagation()}

>


<h2 className="text-xl font-bold mb-4">

Send Enquiry

</h2>



<input

name="visitorName"

value={form.visitorName}

onChange={handleChange}

placeholder="Your Name"

className="w-full border p-3 mb-3 rounded-lg"

/>


<input

name="visitorEmail"

value={form.visitorEmail}

onChange={handleChange}

placeholder="Your Email"

className="w-full border p-3 mb-3 rounded-lg"

/>


<input

name="subject"

value={form.subject}

onChange={handleChange}

placeholder="Subject"

className="w-full border p-3 mb-3 rounded-lg"

/>



<textarea

name="message"

value={form.message}

onChange={handleChange}

placeholder="Message"

rows="4"

className="w-full border p-3 mb-4 rounded-lg"

/>



<button

onClick={handleSend}

disabled={loading}

className="w-full bg-red-600 text-white py-3 rounded-lg"

>

{loading ? "Sending..." : "Send Message"}

</button>



</div>

</div>

)}





{/* PREMIUM ALERT MODAL */}

{alert && (

<div className="

fixed top-6 right-6

bg-white

border border-gray-200

shadow-xl

rounded-xl

px-5 py-4

flex items-center gap-3

z-[999]

">


{alert.type === "success" ? (

<CheckCircleIcon className="w-6 text-green-500"/>

) : (

<ExclamationCircleIcon className="w-6 text-red-500"/>

)}



<p className="font-medium">

{alert.message}

</p>



<button onClick={()=>setAlert(null)}>

<XMarkIcon className="w-5 text-gray-400"/>

</button>


</div>

)}



</>

);

}