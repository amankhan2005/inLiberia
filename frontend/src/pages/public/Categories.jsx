 import { useEffect, useState } from "react";

import { getCategories }

from "../../services/categoryService";



export default function Categories() {

  

  const [categories, setCategories] = useState([]);

  

  useEffect(() => {

    getCategories().then(setCategories);

  }, []);



  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      

      <h1 className="text-2xl font-bold mb-6">

        Categories

      </h1>



      <div className="grid md:grid-cols-4 gap-6">

        

        {categories.map(cat => (

          

          <div

            key={cat._id}

            className="bg-white shadow p-6 rounded-xl"

          >

            {cat.name}

          </div>



        ))}



      </div>



    </div>

  );

}