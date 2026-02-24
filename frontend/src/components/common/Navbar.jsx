 import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Container from "./Container";
import useAuth from "../../hooks/useAuth";

import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

export default function Navbar(){

const { user, logout, loading } = useAuth();

const [open, setOpen] = useState(false);
const [profileOpen, setProfileOpen] = useState(false);

const closeTimeout = useRef(null);

if(loading) return null;


/* ===== DROPDOWN DELAY FUNCTIONS ===== */

const handleMouseEnter = () => {

if(closeTimeout.current){
clearTimeout(closeTimeout.current);
}

setProfileOpen(true);

};

const handleMouseLeave = () => {

closeTimeout.current = setTimeout(() => {

setProfileOpen(false);

}, 300);

};



return(

<header
className="bg-[#d8232a] sticky top-0 z-50"
style={{fontFamily:"Poppins, sans-serif"}}
>


<Container>


<div className="flex justify-between items-center h-[60px]">


{/* LEFT */}

<div className="flex items-center gap-3">


<button
className="md:hidden text-white"
onClick={()=>setOpen(true)}
>

<Bars3Icon className="w-7 h-7"/>

</button>



<Link to="/" className="flex flex-col">

<span className="text-white font-semibold text-[18px]">

inLIBERIA

</span>

<span className="text-yellow-300 text-[10px] font-medium">

BE VERIFIED

</span>

</Link>


</div>



{/* DESKTOP MENU */}

<nav className="hidden md:flex gap-8 text-white text-[15px] font-medium">

<Link to="/browse">Browse</Link>

<Link to="/categories/Residence">Residences</Link>

<Link to="/categories/Business">Business</Link>
<Link to="/helpdesk">Support</Link>

{/* <Link to="/categories">Categories</Link> */}

</nav>




{/* RIGHT */}

<div className="flex items-center gap-5">


{/* NOT LOGIN */}

{!user &&(

<>

<Link
to="/login"
className="hidden md:block text-white font-medium"
>

Login ▾

</Link>


<Link
to="/signup"
className="bg-white text-black pl-5 pr-2 py-1 rounded-full flex items-center gap-2 font-medium"
>

Post Property

<span className="bg-yellow-400 text-xs px-2 rounded-full">

FREE

</span>

</Link>

</>

)}




{/* LOGIN */}

{user &&(

<>


<Link
to="/dashboard/add"
className="bg-white text-black pl-5 pr-2 py-1 rounded-full flex items-center gap-2"
>

Post Property

<span className="bg-yellow-400 text-xs px-2 rounded-full">

FREE

</span>

</Link>



{/* PROFILE DROPDOWN */}

<div
className="relative hidden md:block"
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>


<div className="flex items-center gap-2 text-white cursor-pointer">


<div className="w-8 h-8 bg-blue-200 text-black rounded-full flex items-center justify-center font-semibold">

{user.name?.charAt(0)}

</div>


<span className="font-medium">

Hi, {user.name}

</span>


<span>▾</span>


</div>



{profileOpen &&(

<div className="absolute right-0 top-full mt-2 w-56 bg-white rounded shadow text-black transition-all duration-200">


<Link
to="/dashboard/profile"
className="block px-4 py-2 hover:bg-gray-100"
>

My Profile

</Link>


<Link
to="/dashboard/add"
className="block px-4 py-2 hover:bg-gray-100"
>

Add Property

</Link>


<Link
to="/dashboard/my"
className="block px-4 py-2 hover:bg-gray-100"
>

My Listings

</Link>


<button
onClick={logout}
className="block w-full text-left px-4 py-2 hover:bg-gray-100"
>

Logout

</button>


</div>

)}

</div>


</>

)}



</div>


</div>

</Container>




{/* MOBILE DRAWER */}

<div className={`
fixed top-0 left-0 h-full w-[85%] bg-white z-50 flex flex-col
transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"}
`}>



 




{/* NOT LOGIN */}

{!user &&(

<div className="bg-gray-100 px-4 py-4 border-b flex items-center justify-between">

<p className="text-sm font-medium text-gray-700">

Sign in to get a personalised feed!

</p>


<Link
to="/login"
onClick={()=>setOpen(false)}
className="bg-[#d8232a] text-white px-6 py-2 rounded-full font-semibold"
>

Login

</Link>

</div>

)}




{/* LOGIN */}

{user &&(

<div className="bg-gray-100 px-4 py-4 border-b">

<div className="flex items-center gap-3">

<div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-semibold">

{user.name?.charAt(0)}

</div>


<div>

<div className="font-semibold">

{user.name}

</div>


<Link
to="/dashboard/profile"
onClick={()=>setOpen(false)}
className="text-sm text-gray-500"
>

View Profile

</Link>

</div>

</div>

</div>

)}




{/* MENU */}

<div className="flex-1">

<MenuItem to="/" text="Home" close={setOpen}/>
<MenuItem to="/browse" text="Browse" close={setOpen}/>
<MenuItem to="/categories/Residence" text="Residences" close={setOpen}/>
<MenuItem to="/categories/Business" text="Business" close={setOpen}/>
<MenuItem to="/helpdesk" text="Support" close={setOpen}/>
{/* <MenuItem to="/categories" text="Categories" close={setOpen}/> */}

</div>




{/* LOGOUT */}

{user &&(

<div className="p-4 border-t">

<button
onClick={()=>{
logout();
setOpen(false);
}}
className="w-full bg-[#d8232a] text-white py-3 rounded-full font-semibold"
>

Logout

</button>

</div>

)}



</div>




{/* OVERLAY */}

{open &&(

<div
onClick={()=>setOpen(false)}
className="fixed inset-0 bg-black/40"
/>

)}



</header>

);

}




function MenuItem({to,text,close}){

return(

<Link
to={to}
onClick={()=>close(false)}
className="block p-4 border-b font-medium"
>

{text}

</Link>

);

}