import {

  useState,

  useEffect

} from "react";

import CategoryTable from

"../components/categories/CategoryTable";

import {

  getCategories,

  addCategory,

  deleteCategory

}

from "../services/adminService";


export default function Categories() {


  const [categories, setCategories]

  = useState([]);


  const [form, setForm]

  = useState({

    name: "",

    icon: ""

  });




  const loadCategories = async () => {

    const data =

    await getCategories();

    setCategories(data);

  };



  useEffect(() => {

    loadCategories();

  }, []);




  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:

      e.target.value

    });

  };




  const handleSubmit = async (e) => {

    e.preventDefault();


    await addCategory(form);


    setForm({

      name: "",

      icon: ""

    });


    loadCategories();

  };




  const handleDelete = async (id) => {

    await deleteCategory(id);

    loadCategories();

  };




  return (

    <div>


      <h2 className="text-2xl font-bold mb-4">

        Categories

      </h2>



      {/* ADD FORM */}


      <form

        onSubmit={handleSubmit}

        className="flex gap-3 mb-4"

      >


        <input

          name="name"

          placeholder="Category name"

          value={form.name}

          onChange={handleChange}

          className="border p-2"

        />



        <input

          name="icon"

          placeholder="Icon (emoji)"

          value={form.icon}

          onChange={handleChange}

          className="border p-2"

        />



        <button

          className="bg-red-600 text-white px-4"

        >

          Add

        </button>


      </form>



      {/* TABLE */}


      <CategoryTable

        categories={categories}

        onDelete={handleDelete}

      />


    </div>

  );

}