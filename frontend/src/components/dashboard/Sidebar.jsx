//  import { Link, useLocation } from "react-router-dom";

// import { FaHome, FaPlus, FaList, FaUser, FaTachometerAlt } from "react-icons/fa";


// export default function Sidebar() {

//   const { pathname } = useLocation();


//   const linkClass = (path) =>
//     `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
//       pathname === path
//         ? "bg-red-600 text-white"
//         : "text-gray-700 hover:bg-gray-200"
//     }`;


//   return (

//     <aside className="w-64 bg-white shadow h-screen p-4 flex flex-col justify-between">


//       {/* TOP */}

//       <div>

//         <h2 className="text-xl font-bold mb-6 text-red-600">

//           Dashboard

//         </h2>


//         <nav className="space-y-2">


//           {/* HOME BUTTON */}

//           <Link to="/" className={linkClass("/")}>

//             <FaHome />

//             Home

//           </Link>



//           <Link to="/dashboard" className={linkClass("/dashboard")}>

//             <FaTachometerAlt />

//             Overview

//           </Link>



//           <Link to="/dashboard/add" className={linkClass("/dashboard/add")}>

//             <FaPlus />

//             Add Listing

//           </Link>



//           <Link to="/dashboard/my" className={linkClass("/dashboard/my")}>

//             <FaList />

//             My Listings

//           </Link>



//           <Link to="/dashboard/profile" className={linkClass("/dashboard/profile")}>

//             <FaUser />

//             Profile

//           </Link>


//         </nav>

//       </div>



//       {/* BOTTOM OPTIONAL */}

//       <div className="text-xs text-gray-400">

//         © Ninebyt

//       </div>


//     </aside>

//   );

// }

 import { Link, useLocation } from "react-router-dom";

import {
FaHome,
FaPlus,
FaList,
FaUser,
FaTachometerAlt
} from "react-icons/fa";


export default function Sidebar() {

const { pathname } = useLocation();


const linkClass = (path) => `

group

relative

flex items-center gap-3

px-4 py-3

rounded-xl

transition-all duration-200

font-medium

${
pathname === path

? "bg-red-600 text-white shadow-md"

: "text-gray-700 hover:bg-red-50 hover:text-red-600"

}

`;



const iconClass = (path)=>`

text-sm

transition

${
pathname === path

? "text-white"

: "text-gray-400 group-hover:text-red-600"

}

`;



return (

<aside className="

hidden lg:flex

w-64

bg-white

border-r border-gray-200

h-screen

flex-col

justify-between

sticky top-0

">


{/* TOP */}

<div>


{/* LOGO */}

<div className="px-5 py-6 border-b border-gray-100">


<h2 className="

text-lg font-bold

text-red-600

tracking-wide

">

inLIBERIA

</h2>


<p className="

text-[10px]

text-gray-400

tracking-widest

mt-1

">

BE VERIFIED

</p>


</div>





{/* NAVIGATION */}

<nav className="p-4 space-y-1">


<Link to="/" className={linkClass("/")}>

<span className={`

absolute left-0 top-0 h-full w-1

bg-red-600 rounded-r

${pathname === "/" ? "opacity-100" : "opacity-0"}

`}/>

<FaHome className={iconClass("/")}/>

Home

</Link>




<Link to="/dashboard" className={linkClass("/dashboard")}>

<span className={`

absolute left-0 top-0 h-full w-1

bg-red-600 rounded-r

${pathname === "/dashboard" ? "opacity-100" : "opacity-0"}

`}/>

<FaTachometerAlt className={iconClass("/dashboard")}/>

Overview

</Link>




<Link to="/dashboard/add" className={linkClass("/dashboard/add")}>

<span className={`

absolute left-0 top-0 h-full w-1

bg-red-600 rounded-r

${pathname === "/dashboard/add" ? "opacity-100" : "opacity-0"}

`}/>

<FaPlus className={iconClass("/dashboard/add")}/>

Add Listing

</Link>




<Link to="/dashboard/my" className={linkClass("/dashboard/my")}>

<span className={`

absolute left-0 top-0 h-full w-1

bg-red-600 rounded-r

${pathname === "/dashboard/my" ? "opacity-100" : "opacity-0"}

`}/>

<FaList className={iconClass("/dashboard/my")}/>

My Listings

</Link>




<Link to="/dashboard/profile" className={linkClass("/dashboard/profile")}>

<span className={`

absolute left-0 top-0 h-full w-1

bg-red-600 rounded-r

${pathname === "/dashboard/profile" ? "opacity-100" : "opacity-0"}

`}/>

<FaUser className={iconClass("/dashboard/profile")}/>

Profile

</Link>


</nav>


</div>




{/* FOOTER */}

<div className="

p-5

border-t border-gray-100

">


<p className="

text-xs

text-gray-400

leading-relaxed

">

© inLIBERIA

<br/>

<span className="tracking-widest">

BE VERIFIED

</span>

</p>


</div>



</aside>

);

}