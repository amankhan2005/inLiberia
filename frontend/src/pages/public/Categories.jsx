import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getCategories } from "../../services/categoryService";


export default function Categories() {

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetchCategories();

  }, []);




  const fetchCategories = async () => {

    try {

      const data = await getCategories();

      setCategories(data);

    }

    catch (err) {

      console.error(err);

    }

    finally {

      setLoading(false);

    }

  };



  if (loading)

    return <p className="text-center mt-10">Loading...</p>;



  return (

    <div className="max-w-7xl mx-auto px-4 py-10">


      <h1 className="text-3xl font-bold mb-6">

        All Categories

      </h1>



      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


        {categories.map(cat => (

          <Link

            key={cat._id}

            to={`/categories/${cat.name}`}

            className="bg-white shadow rounded-xl p-6 hover:shadow-md transition"

          >


            {cat.icon && (

              <div className="text-3xl mb-2">

                {cat.icon}

              </div>

            )}


            <h3 className="font-semibold">

              {cat.name}

            </h3>


          </Link>

        ))}


      </div>


    </div>

  );

}