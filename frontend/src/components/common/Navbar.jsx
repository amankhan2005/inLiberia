//  import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import Container from "./Container";
// import useAuth from "../../hooks/useAuth";
// import logo from "../../assets/inliberia-logo.png";

// import {
//   Bars3Icon,
//   XMarkIcon
// } from "@heroicons/react/24/outline";

// export default function Navbar(){

// const { user, logout, loading } = useAuth();

// const [open, setOpen] = useState(false);
// const [profileOpen, setProfileOpen] = useState(false);

// const closeTimeout = useRef(null);

// if(loading) return null;


// /* ===== DROPDOWN DELAY FUNCTIONS ===== */

// const handleMouseEnter = () => {

// if(closeTimeout.current){
// clearTimeout(closeTimeout.current);
// }

// setProfileOpen(true);

// };

// const handleMouseLeave = () => {

// closeTimeout.current = setTimeout(() => {

// setProfileOpen(false);

// }, 300);

// };



// return(

// <header
// className="bg-[#144474] sticky top-0 z-50"
// style={{fontFamily:"Poppins, sans-serif"}}
// >


// <Container>


// <div className="flex justify-between items-center h-[90px]">


// {/* LEFT */}

// <div className="flex items-center gap-3">


// <button
// className="md:hidden text-white"
// onClick={()=>setOpen(true)}
// >

// <Bars3Icon className="w-7 h-7"/>

// </button>



//     <Link to="/" className="flex items-center">
      
//     <img
//   src={logo}
//   alt="inLIBERIA Logo"
//   className="
//   h-10
//   sm:h-12
//   md:h-14
//   lg:h-16
//   w-auto
//   object-contain
//   rounded-xl
//   "
// />

//     </Link>


// </div>



// {/* DESKTOP MENU */}

// <nav className="hidden md:flex gap-8 text-white text-[15px] font-medium">

// <Link to="/browse">Browse</Link>

// <Link to="/categories/Residences">Residences</Link>

// <Link to="/categories/Business">Business</Link>
// <Link to="/helpdesk">Support</Link>

// {/* <Link to="/categories">Categories</Link> */}

// </nav>




// {/* RIGHT */}

// <div className="flex items-center gap-5">


// {/* NOT LOGIN */}

// {!user &&(

// <>

// <Link
// to="/login"
// className="hidden md:block text-white font-medium"
// >

// Login ▾

// </Link>


// <Link
// to="/signup"
// className="bg-white text-black pl-5 pr-2 py-1 rounded-full flex items-center gap-2 font-medium"
// >

// Post Property

// <span className="bg-yellow-400 text-xs px-2 rounded-full">

// FREE

// </span>

// </Link>

// </>

// )}




// {/* LOGIN */}

// {user &&(

// <>


// <Link
// to="/dashboard/add"
// className="bg-white text-black pl-5 pr-2 py-1 rounded-full flex items-center gap-2"
// >

// Post Property

// <span className="bg-yellow-400 text-xs px-2 rounded-full">

// FREE

// </span>

// </Link>



// {/* PROFILE DROPDOWN */}

// <div
// className="relative hidden md:block"
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
// >


// <div className="flex items-center gap-2 text-white cursor-pointer">


// <div className="w-8 h-8 bg-blue-200 text-black rounded-full flex items-center justify-center font-semibold">

// {user.name?.charAt(0)}

// </div>


// <span className="font-medium">

// Hi, {user.name}

// </span>


// <span>▾</span>


// </div>



// {profileOpen &&(

// <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded shadow text-black transition-all duration-200">


// <Link
// to="/dashboard/profile"
// className="block px-4 py-2 hover:bg-gray-100"
// >

// My Profile

// </Link>


// <Link
// to="/dashboard/add"
// className="block px-4 py-2 hover:bg-gray-100"
// >

// Add Property

// </Link>


// <Link
// to="/dashboard/my"
// className="block px-4 py-2 hover:bg-gray-100"
// >

// My Listings

// </Link>


// <button
// onClick={logout}
// className="block w-full text-left px-4 py-2 hover:bg-gray-100"
// >

// Logout

// </button>


// </div>

// )}

// </div>


// </>

// )}



// </div>


// </div>

// </Container>




// {/* MOBILE DRAWER */}

// <div className={`
// fixed top-0 left-0 h-full w-[85%] bg-white z-50 flex flex-col
// transition-transform duration-300
// ${open ? "translate-x-0" : "-translate-x-full"}
// `}>



 




// {/* NOT LOGIN */}

// {!user &&(

// <div className="bg-gray-100 px-4 py-4 border-b flex items-center justify-between">

// <p className="text-sm font-medium text-gray-700">

// Sign in to get a personalised feed!

// </p>


// <Link
// to="/login"
// onClick={()=>setOpen(false)}
// className="bg-[#d8232a] text-white px-6 py-2 rounded-full font-semibold"
// >

// Login

// </Link>

// </div>

// )}




// {/* LOGIN */}

// {user &&(

// <div className="bg-gray-100 px-4 py-4 border-b">

// <div className="flex items-center gap-3">

// <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-semibold">

// {user.name?.charAt(0)}

// </div>


// <div>

// <div className="font-semibold">

// {user.name}

// </div>


// <Link
// to="/dashboard/profile"
// onClick={()=>setOpen(false)}
// className="text-sm text-gray-500"
// >

// View Profile

// </Link>

// </div>

// </div>

// </div>

// )}




// {/* MENU */}

// <div className="flex-1">

// <MenuItem to="/" text="Home" close={setOpen}/>
// <MenuItem to="/browse" text="Browse" close={setOpen}/>
// <MenuItem to="/categories/Residence" text="Residences" close={setOpen}/>
// <MenuItem to="/categories/Business" text="Business" close={setOpen}/>
// <MenuItem to="/helpdesk" text="Support" close={setOpen}/>
// {/* <MenuItem to="/categories" text="Categories" close={setOpen}/> */}

// </div>




// {/* LOGOUT */}

// {user &&(

// <div className="p-4 border-t">

// <button
// onClick={()=>{
// logout();
// setOpen(false);
// }}
// className="w-full bg-[#d8232a] text-white py-3 rounded-full font-semibold"
// >

// Logout

// </button>

// </div>

// )}



// </div>




// {/* OVERLAY */}

// {open &&(

// <div
// onClick={()=>setOpen(false)}
// className="fixed inset-0 bg-black/40"
// />

// )}



// </header>

// );

// }




// function MenuItem({to,text,close}){

// return(

// <Link
// to={to}
// onClick={()=>close(false)}
// className="block p-4 border-b font-medium"
// >

// {text}

// </Link>

// );

// }

import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Container from "./Container";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/inliberia-logo.png";

import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

export default function Navbar() {

  const { user, logout, loading } = useAuth();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeTimeout = useRef(null);

  if (loading) return null;

  /* ===== DROPDOWN DELAY FUNCTIONS ===== */
  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setProfileOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setProfileOpen(false);
    }, 300);
  };

  return (
    <header
      className="bg-[#144474] sticky top-0 z-50 shadow-lg"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Container>
        {/* Adjusted height for better proportions */}
        <div className="flex justify-between items-center h-20 lg:h-[90px]">
          
          {/* LEFT - Hamburger & Logo */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => setOpen(true)}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>

            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="inLIBERIA Logo"
                className="h-10 md:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP MENU - Hidden on smaller screens */}
          <nav className="hidden lg:flex gap-1 text-white text-[15px] font-medium items-center">
            <Link to="/browse" className="px-4 py-2 rounded-lg hover:bg-white/10 transition">
              Browse
            </Link>
            <Link to="/categories/Residences" className="px-4 py-2 rounded-lg hover:bg-white/10 transition">
              Residences
            </Link>
            <Link to="/categories/Business" className="px-4 py-2 rounded-lg hover:bg-white/10 transition">
              Business
            </Link>
            <Link to="/helpdesk" className="px-4 py-2 rounded-lg hover:bg-white/10 transition">
              Support
            </Link>
          </nav>

          {/* RIGHT - Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* NOT LOGIN */}
            {!user && (
              <div className="flex items-center gap-2">
                {/* Hide text on very small screens, show on md+ */}
                <Link
                  to="/login"
                  className="hidden sm:block text-white text-sm font-medium hover:text-blue-200 transition px-3 py-2"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-white text-[#144474] px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-blue-50 transition-all duration-300 shadow-sm"
                >
                  <span className="hidden sm:inline">Post Property</span>
                  <span className="sm:hidden">Post</span>
                  <span className="bg-yellow-400 text-[9px] md:text-[10px] text-black px-1.5 md:px-2 py-0.5 rounded-full font-bold uppercase">
                    FREE
                  </span>
                </Link>
              </div>
            )}

            {/* LOGIN */}
            {user && (
              <>
                {/* Post Property Button - Desktop */}
                <Link
                  to="/dashboard/add"
                  className="hidden md:flex bg-white text-[#144474] px-5 py-2.5 rounded-full items-center gap-2 text-sm font-semibold hover:bg-blue-50 transition-all duration-300 shadow-sm"
                >
                  Post Property
                  <span className="bg-yellow-400 text-[10px] text-black px-2 py-0.5 rounded-full font-bold uppercase">
                    FREE
                  </span>
                </Link>

                {/* PROFILE DROPDOWN - Desktop */}
                <div
                  className="relative hidden md:block"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-2 text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition">
                    <div className="w-9 h-9 bg-white text-[#144474] rounded-full flex items-center justify-center font-bold shadow-inner text-sm">
                      {user.name?.charAt(0)}
                    </div>
                    <span className="font-medium hidden lg:block text-sm">
                      Hi, {user.name.split(' ')[0]}
                    </span>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 text-gray-800 overflow-hidden">
                      {/* User Info Header in Dropdown */}
                      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      
                      <div className="py-2">
                        <Link
                          to="/dashboard/profile"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-[#144474] transition text-sm"
                        >
                          <UserCircleIcon className="w-5 h-5" />
                          My Profile
                        </Link>
                        <Link
                          to="/dashboard/add"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-[#144474] transition text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          Add Property
                        </Link>
                        <Link
                          to="/dashboard/my"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-[#144474] transition text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                          My Listings
                        </Link>
                      </div>
                      
                      <div className="border-t border-gray-100">
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-3 text-left px-4 py-2.5 text-red-600 hover:bg-red-50 transition font-medium text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                          </svg>
                          Logout
                        </button>
                      </div>
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
        fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 flex flex-col
        transition-transform duration-300 ease-in-out shadow-2xl
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}>

        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#144474] text-white">
          <span className="font-bold text-lg">Menu</span>
          <button 
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* MOBILE CONTENT: NOT LOGIN */}
        {!user && (
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <p className="text-sm font-medium text-gray-600 mb-3">
              Sign in to get a personalised feed!
            </p>
            <div className="flex gap-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1 text-center bg-white border border-[#144474] text-[#144474] px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition text-sm"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="flex-1 text-center bg-[#144474] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#0f345a] transition text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}

        {/* MOBILE CONTENT: LOGIN */}
        {user && (
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#144474] text-white rounded-full flex items-center justify-center font-bold shadow-inner text-lg">
                {user.name?.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-800">
                  {user.name}
                </div>
                <Link
                  to="/dashboard/profile"
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#144474] font-medium hover:underline"
                >
                  View Profile
                </Link>
              </div>
            </div>
            
            {/* POST PROPERTY BUTTON (Mobile - Logged In) */}
            <Link
              to="/dashboard/add"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#144474] text-white py-3 rounded-full font-semibold hover:bg-[#0f345a] transition shadow-md text-sm"
            >
              Post Property
            </Link>
          </div>
        )}

        {/* MENU LINKS */}
        <div className="flex-1 overflow-y-auto py-2">
          <MenuItem to="/" text="Home" close={setOpen} />
          <MenuItem to="/browse" text="Browse" close={setOpen} />
          <MenuItem to="/categories/Residence" text="Residences" close={setOpen} />
          <MenuItem to="/categories/Business" text="Business" close={setOpen} />
          <MenuItem to="/helpdesk" text="Support" close={setOpen} />
        </div>

        {/* LOGOUT BUTTON */}
        {user && (
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        )}

      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
        />
      )}

    </header>
  );
}

function MenuItem({ to, text, close }) {
  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className="flex items-center gap-3 p-4 mx-2 my-1 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-[#144474] transition-colors"
    >
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-auto opacity-50">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </Link>
  );
}