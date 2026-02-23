 import { useEffect, useState } from "react";

import { getCategories } from "../../services/categoryService";

import Container from "../common/Container";

import SectionTitle from "../common/SectionTitle";

import { Link } from "react-router-dom";


export default function CategorySection() {

  const [categories, setCategories] = useState([]);


  useEffect(() => {

    getCategories().then(setCategories);

  }, []);



  return (

    <Container className="py-16">

      <SectionTitle title="Browse by Category" />


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


        {categories.map((cat) => (

          <Link

            key={cat._id}


            // ⭐ THIS IS IMPORTANT CHANGE

            to={`/listings?category=${cat._id}&name=${cat.name}`}


            className="bg-white shadow rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition duration-200"

          >


            {/* ICON optional */}

            {cat.icon && (

              <div className="text-3xl mb-2">

                {cat.icon}

              </div>

            )}



            {/* NAME */}

            <h3 className="font-semibold text-gray-800">

              {cat.name}

            </h3>


          </Link>

        ))}


      </div>


    </Container>

  );

}