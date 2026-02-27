// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { getCategories } from "../../services/categoryService";


// export default function Categories() {

//   const [categories, setCategories] = useState([]);

//   const [loading, setLoading] = useState(true);



//   useEffect(() => {

//     fetchCategories();

//   }, []);




//   const fetchCategories = async () => {

//     try {

//       const data = await getCategories();

//       setCategories(data);

//     }

//     catch (err) {

//       console.error(err);

//     }

//     finally {

//       setLoading(false);

//     }

//   };



//   if (loading)

//     return <p className="text-center mt-10">Loading...</p>;



//   return (

//     <div className="max-w-7xl mx-auto px-4 py-10">


//       <h1 className="text-3xl font-bold mb-6">

//         All Categories

//       </h1>



//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


//         {categories.map(cat => (

//           <Link

//             key={cat._id}

//             to={`/categories/${cat.name}`}

//             className="bg-white shadow rounded-xl p-6 hover:shadow-md transition"

//           >


//             {cat.icon && (

//               <div className="text-3xl mb-2">

//                 {cat.icon}

//               </div>

//             )}


//             <h3 className="font-semibold">

//               {cat.name}

//             </h3>


//           </Link>

//         ))}


//       </div>


//     </div>

//   );

// }

  import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/categoryService";
import {
  SparklesIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load categories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // SEO Metadata
  const seoText =
    "Education in Liberia, Healthcare in Liberia, Shopping in Liberia, Hospitality in Liberia, Food and Dining in Liberia, Sports and Fitness in Liberia, Business Services in Liberia, Government Services in Liberia, Automotive in Liberia, Entertainment in Liberia. KnowLiberia helps users discover trusted businesses, services, and opportunities across Liberia. #knowliberia";

  // --- UI COMPONENTS ---

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 animate-pulse">
      <div className="w-12 h-12 bg-slate-200 rounded-lg mb-5"></div>
      <div className="h-5 bg-slate-200 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
    </div>
  );

  const CategoryCard = ({ cat }) => (
    <Link
      to={`/browse?category=${encodeURIComponent(cat.name)}`}
      className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#144474] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {/* Icon Container */}
      <div className="mb-5 flex items-center justify-center w-14 h-14 bg-slate-50 rounded-xl text-[#144474] group-hover:bg-[#144474] group-hover:text-white transition-colors duration-300">
        {cat.icon ? (
          <span className="text-3xl">{cat.icon}</span>
        ) : (
          <Squares2X2Icon className="w-7 h-7" />
        )}
      </div>

      {/* Content */}
      <h3 className="font-semibold text-lg text-slate-800 mb-1">
        {cat.name}
      </h3>
      <p className="text-sm text-slate-400 mt-auto">
        View listings &rarr;
      </p>
    </Link>
  );

  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-[#144474] to-[#0c2d4d] text-white py-24 px-6 text-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-3 rounded-full mb-6 border border-white/20">
             <SparklesIcon className="w-6 h-6 text-blue-200"/>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            Explore Business Categories
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Find trusted businesses, services, and companies across Liberia using KnowLiberia's comprehensive directory.
          </p>
        </div>
      </section>

      {/* --- SEO TEXT SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-[#144474] rounded-full"></div>
            <h2 className="font-bold text-xl text-slate-800">
              Sectors We Cover
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {seoText}
          </p>
        </div>
      </section>

      {/* --- CATEGORY GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Browse by Category
          </h2>
          {!loading && categories.length > 0 && (
             <span className="text-sm text-slate-400 hidden sm:block">{categories.length} Categories Found</span>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-100">
             <ExclamationTriangleIcon className="w-10 h-10 mx-auto text-red-400 mb-3"/>
             <p className="text-red-600 font-medium">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat._id} cat={cat} />
            ))}
          </div>
        )}
      </section>

      {/* --- SUPPORT CTA --- */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
            <QuestionMarkCircleIcon className="w-12 h-12 mx-auto mb-5 text-blue-400 opacity-80"/>
            <h2 className="text-3xl font-bold mb-3">
                Need Assistance?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
                Our support team is ready to help you navigate opportunities in Liberia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="mailto:info@knowliberia.com"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/10 px-8 py-3.5 rounded-xl font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                    <EnvelopeIcon className="w-5 h-5" />
                    info@knowliberia.com
                </a>

                <Link
                    to="/helpdesk"
                    className="inline-flex items-center justify-center bg-[#144474] px-8 py-3.5 rounded-xl font-semibold hover:bg-[#1a5591] transition-all shadow-lg shadow-blue-900/30"
                >
                    Contact Support
                </Link>
            </div>
        </div>
      </section>

    </main>
  );
}