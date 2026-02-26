 import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

import { getCategories } from "../../services/categoryService";
import { getListings } from "../../services/listingService";

export default function PremiumHero() {

 
  const boxRef = useRef();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const [search, setSearch] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);


  // LOAD CATEGORIES
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);


  // LOAD SUGGESTIONS
  useEffect(() => {

    if (!category && !search) {
      setShow(false);
      return;
    }

    const timer = setTimeout(async () => {

      try {

        const params = {};

        if (category) params.category = category;
        if (search) params.search = search;

        params.limit = 8;

        const res = await getListings(params);

        setSuggestions(res || []);

        setShow(true);

      }
      catch (err) {

        console.log(err);

      }

    }, 300);

    return () => clearTimeout(timer);

  }, [search, category]);


  // CLOSE OUTSIDE
  useEffect(() => {

    const close = (e) => {

      if (boxRef.current && !boxRef.current.contains(e.target)) {

        setShow(false);

        setOpen(false);

      }

    };

    document.addEventListener("click", close);

    return () => document.removeEventListener("click", close);

  }, []);



  return (

    <section className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-20 px-4 relative ">


      {/* background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-50 to-transparent opacity-40 pointer-events-none"></div>



      <div className="max-w-4xl mx-auto text-center relative z-10">



        {/* badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#144474] text-sm font-semibold px-5 py-2 rounded-full mb-8 tracking-wide shadow-sm">

          <span className="w-2 h-2 bg-[#144474] rounded-full animate-pulse"></span>

          INVESTMENT PLATFORM • LIBERIA

        </div>



        {/* heading */}

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">

          Invest Smarter with

        </h1>



        <h2 className="text-4xl md:text-6xl font-extrabold text-[#144474] mt-2 tracking-tight">

          #InvestInLiberia

        </h2>



        {/* description */}

        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-12 leading-relaxed">

          Discover verified hospitals, schools, restaurants, and businesses ready for investment across Liberia.

        </p>




        {/* SEARCH BOX CONTAINER */}
        {/* FIX: z-40 added */}
        <div className="relative max-w-3xl mx-auto z-40" ref={boxRef}>



          {/* SEARCH BAR */}
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-xl p-2 transition-all duration-300 hover:shadow-2xl hover:border-gray-300">



            {/* CATEGORY */}
            <div className="relative w-full md:w-auto">


              <button

                onClick={() => setOpen(!open)}

                className="flex items-center justify-between w-full md:w-auto px-6 py-3 text-gray-700 font-medium bg-gray-50 hover:bg-gray-100 rounded-xl md:rounded-l-xl md:rounded-r-none transition-colors duration-200 min-w-[180px]"

              >

                <span className="truncate">

                  {categories.find(c => c._id === category)?.name || "All Categories"}

                </span>


                <ChevronDownIcon

                  className={`w-4 h-4 ml-2 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}

                />

              </button>




              {/* CATEGORY DROPDOWN */}
              {/* FIX: z-50 */}
              {open && (

                <div className="absolute top-full left-0 w-full md:w-auto bg-white border border-gray-100 rounded-xl mt-2 shadow-2xl z-50 py-2 max-h-64 overflow-y-auto animate-fadeIn mb-4">


                  {categories.map(cat => (

                    <div

                      key={cat._id}

                      className="px-5 py-3 hover:bg-blue-50 hover:text-[#144474] cursor-pointer transition-colors duration-150 text-gray-700 text-left"

                      onClick={() => {

                        setCategory(cat._id);

                        setOpen(false);

                      }}

                    >

                      {cat.name}

                    </div>

                  ))}

                </div>

              )}


            </div>




            {/* INPUT */}

            <input

              className="flex-1 w-full md:w-auto px-6 py-3 outline-none text-gray-800 placeholder-gray-400 text-lg bg-transparent"

              placeholder="Search investment opportunities..."

              value={search}

              onChange={(e) => setSearch(e.target.value)}

            />




            {/* BUTTON */}

            <button className="w-full md:w-auto mt-2 md:mt-0 bg-[#144474] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0f345a] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">


              <MagnifyingGlassIcon className="w-5 h-5" />

              <span>Search</span>


            </button>



          </div>





          {/* SUGGESTIONS */}
          {/* FIX: z-30 */}
          {show && suggestions.length > 0 && (

            <div className="absolute top-full left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-2xl mt-3 z-30 overflow-hidden animate-fadeIn mb-4">


              <div className="p-2">


                {suggestions.map(item => {



                const imageUrl =
  item.images?.length
    ? item.images[0]
    : "https://via.placeholder.com/60";



                  return (


                   <Link
  to={`/listing/${item.slug || item._id}`}
  key={item._id}

                      className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-150 cursor-pointer group"

                    >



                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border">

                        <img

                          src={imageUrl}

                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

                          alt={item.title}

                        />

                      </div>



                      <div className="flex flex-col justify-center text-left overflow-hidden">


                        <p className="font-semibold text-gray-900 truncate">

                          {item.title}

                        </p>


                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">

                          <MapPinIcon className="w-4 h-4 text-[#144474]" />

                          <span className="truncate">

                            {item.location}

                          </span>

                        </div>


                      </div>


                    </Link>


                  );


                })}


              </div>


            </div>

          )}



        </div>


      </div>


    </section>

  );

}