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

      <SectionTitle

        title="Browse by Category"

      />



      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map(cat => (

          <Link

            key={cat._id}

            to={`/categories/${cat._id}`}

            className="bg-white shadow rounded-xl p-6 hover:shadow-md transition"

          >

            <h3 className="font-semibold">

              {cat.name}

            </h3>

          </Link>

        ))}

      </div>

    </Container>

  );

}