//  import useAuth from "../../hooks/useAuth";

// export default function DashboardHeader() {

//   const { user } = useAuth();

//   return (

//     <header className="bg-white shadow px-6 py-4">

//       <h1 className="font-semibold">

//         Welcome, {user?.name}

//       </h1>

//     </header>

//   );

// }

 import useAuth from "../../hooks/useAuth";

import { Link, useLocation } from "react-router-dom";

import {
FaHome,
FaChevronDown,
FaBars,
FaTimes,
FaTachometerAlt,
FaPlus,
FaList,
FaUser
} from "react-icons/fa";

import { useState, useRef, useEffect } from "react";


export default function DashboardHeader(){

const { user } = useAuth();

const { pathname } = useLocation();

const [dropdownOpen,setDropdownOpen] = useState(false);

const [mobileOpen,setMobileOpen] = useState(false);

const dropdownRef = useRef();


// Close dropdown outside click

useEffect(()=>{

function handleClick(e){

if(
dropdownRef.current &&
!dropdownRef.current.contains(e.target)
){
setDropdownOpen(false);
}

}

document.addEventListener("click",handleClick);

return ()=>document.removeEventListener("click",handleClick);

},[]);



return(

<>

{/* HEADER */}

<header className="

bg-red-600

px-4 sm:px-6

py-4

flex items-center justify-between

sticky top-0

z-40

text-white

shadow-md

">


{/* LEFT */}

<div className="flex items-center gap-4">


{/* MOBILE MENU BUTTON */}

<button

onClick={()=>setMobileOpen(true)}

className="

lg:hidden

text-lg

text-white

hover:text-gray-200

transition

"

>

<FaBars/>

</button>



{/* HOME */}

<Link

to="/"

className="

text-white

hover:text-gray-200

transition

"

>

<FaHome/>

</Link>



<h1 className="

font-semibold

text-white

text-sm sm:text-base

">

Welcome, {user?.name}

</h1>


</div>




{/* DESKTOP DROPDOWN */}

<div className="hidden lg:block relative" ref={dropdownRef}>


<button

onClick={()=>setDropdownOpen(!dropdownOpen)}

className="

bg-white

text-red-600

hover:bg-gray-100

px-5 py-2.5

rounded-full

flex items-center gap-2

font-medium

shadow-sm

hover:shadow-md

transition

"

>

Manage Property


<FaChevronDown

className={`

text-xs

transition-transform duration-300

${dropdownOpen && "rotate-180"}

`}

/>


</button>




{/* DROPDOWN */}

{dropdownOpen &&(

<div className="

absolute right-0 mt-3

bg-white

shadow-xl

rounded-xl

w-56

overflow-hidden

border

animate-fadeIn

text-gray-700

">



<MenuItemDesktop to="/dashboard" text="Overview" close={()=>setDropdownOpen(false)}/>

<MenuItemDesktop to="/dashboard/add" text="Add Listing" close={()=>setDropdownOpen(false)}/>

<MenuItemDesktop to="/dashboard/my" text="My Listings" close={()=>setDropdownOpen(false)}/>

<MenuItemDesktop to="/dashboard/profile" text="Profile" close={()=>setDropdownOpen(false)}/>


</div>

)}



</div>



</header>




{/* MOBILE SIDEBAR */}

<div className={`

fixed inset-0 z-50

${mobileOpen ? "" : "pointer-events-none"}

`}>



{/* OVERLAY */}

<div

onClick={()=>setMobileOpen(false)}

className={`

absolute inset-0

bg-black/40

backdrop-blur-sm

transition-opacity duration-300

${mobileOpen ? "opacity-100" : "opacity-0"}

`}

/>



{/* SIDEBAR */}

<div className={`

absolute left-0 top-0

h-full w-72

bg-white

shadow-2xl

p-5

transform

transition-transform duration-300

${mobileOpen ? "translate-x-0" : "-translate-x-full"}

`}>




{/* HEADER */}

<div className="flex justify-between items-center mb-8">


<div>

<p className="text-xs text-gray-400">

MANAGE

</p>

<h2 className="

font-semibold

text-red-600

">

Property

</h2>

</div>



<button

onClick={()=>setMobileOpen(false)}

className="

text-gray-500

hover:text-red-600

transition

"

>

<FaTimes/>

</button>


</div>




{/* MENU */}

<nav className="space-y-1">


<MenuItemMobile

to="/"

icon={<FaHome/>}

text="Home"

pathname={pathname}

close={()=>setMobileOpen(false)}

/>


<MenuItemMobile

to="/dashboard"

icon={<FaTachometerAlt/>}

text="Overview"

pathname={pathname}

close={()=>setMobileOpen(false)}

/>


<MenuItemMobile

to="/dashboard/add"

icon={<FaPlus/>}

text="Add Listing"

pathname={pathname}

close={()=>setMobileOpen(false)}

/>


<MenuItemMobile

to="/dashboard/my"

icon={<FaList/>}

text="My Listings"

pathname={pathname}

close={()=>setMobileOpen(false)}

/>


<MenuItemMobile

to="/dashboard/profile"

icon={<FaUser/>}

text="Profile"

pathname={pathname}

close={()=>setMobileOpen(false)}

/>


</nav>



</div>


</div>


</>

);

}



// Desktop Item

function MenuItemDesktop({to,text,close}){

return(

<Link

to={to}

onClick={close}

className="

block

px-4 py-3

hover:bg-red-50

hover:text-red-600

transition

"

>

{text}

</Link>

);

}



// Mobile Item

function MenuItemMobile({

to,

icon,

text,

pathname,

close

}){

return(

<Link

to={to}

onClick={close}

className={`

flex items-center gap-3

px-4 py-3

rounded-xl

transition

font-medium

${pathname === to

? "bg-red-600 text-white shadow"

: "text-gray-700 hover:bg-red-50 hover:text-red-600"

}

`}

>

{icon}

{text}

</Link>

);

}