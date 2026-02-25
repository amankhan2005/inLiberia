 import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import Container from "../common/Container";
import { Link } from "react-router-dom";

export default function CategorySection() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // show only 4
  const visibleCategories = categories.slice(0, 4);

  return (
    <section className="bg-slate-50 pt-20 pb-24">

      <Container>

        {/* HEADER */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#144474] rounded-full text-sm font-bold tracking-wide mb-4">
            OPPORTUNITIES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Categories We Deal In
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Explore sectors where you can invest and grow your wealth in Liberia.
          </p>

        </div>



        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {visibleCategories.map((cat) => (

            <Link
              key={cat._id}
              to={`/browse?category=${cat._id}`}
              className="group relative bg-[#144474] rounded-2xl p-6 pt-10 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1"
            >

              <div className="w-20 h-20 bg-white/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">

                <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {cat.icon || "🏢"}
                </span>

              </div>



              <h3 className="font-bold text-lg text-white text-center">
                {cat.name}
              </h3>



              <div className="flex items-center gap-2 mt-2 text-sm font-medium text-blue-100 group-hover:text-white">

                <span>Invest Now</span>

                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />

                </svg>

              </div>

            </Link>

          ))}

        </div>



        {/* EXPLORE MORE BUTTON */}
        {categories.length > 4 && (

          <div className="text-center mt-12">

            <Link
              to="/browse"
              className="inline-flex items-center gap-2 bg-[#144474] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#0f345a] hover:shadow-xl transition-all duration-300"
            >

              Explore More Categories

              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />

              </svg>

            </Link>

          </div>

        )}



      </Container>

    </section>
  );

}