 import { useState, useEffect } from "react";
import { createListing } from "../../services/listingService";
import { getCategories } from "../../services/categoryService";
import { useNavigate } from "react-router-dom";

export default function AddListing() {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [imagePreview, setImagePreview] = useState([]);

  const [form, setForm] = useState({

    title: "",
    price: "",
    location: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    category: "",
    images: []

  });


  useEffect(() => {

    getCategories().then(setCategories);

  }, []);



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };



  // IMAGE UPLOAD + PREVIEW
  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);

    setForm({

      ...form,

      images: [...form.images, ...files]

    });

    const preview = files.map(file => URL.createObjectURL(file));

    setImagePreview(prev => [...prev, ...preview]);

  };



  // REMOVE IMAGE
  const removeImage = (index) => {

    const newImages = [...form.images];

    const newPreview = [...imagePreview];

    newImages.splice(index, 1);

    newPreview.splice(index, 1);

    setForm({ ...form, images: newImages });

    setImagePreview(newPreview);

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach(key => {

      if (key === "images") {

        form.images.forEach(img => formData.append("images", img));

      }

      else {

        formData.append(key, form[key]);

      }

    });


    await createListing(formData);

    navigate("/dashboard/my");

  };



  return (

    <form

      onSubmit={handleSubmit}

      className="bg-white p-6 rounded-xl shadow space-y-4 max-w-2xl mx-auto"

    >

      <h2 className="text-xl font-bold">Create Listing</h2>


      <input name="title" placeholder="Title"
        onChange={handleChange}
        className="w-full border p-2 rounded" />


      <input name="price" placeholder="Price"
        onChange={handleChange}
        className="w-full border p-2 rounded" />


      <input name="location" placeholder="Location"
        onChange={handleChange}
        className="w-full border p-2 rounded" />


      <select name="category"
        onChange={handleChange}
        className="w-full border p-2 rounded">

        <option>Select Category</option>

        {categories.map(cat => (

          <option key={cat._id} value={cat._id}>

            {cat.name}

          </option>

        ))}

      </select>



      <textarea name="description"
        placeholder="Description"
        onChange={handleChange}
        className="w-full border p-2 rounded" />



      <input name="contactEmail"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-2 rounded" />


      <input name="contactPhone"
        placeholder="Phone"
        onChange={handleChange}
        className="w-full border p-2 rounded" />


      {/* IMAGE UPLOAD UI */}

      <div>

        <label className="block font-semibold mb-2">

          Upload Images

        </label>


        <label

          className="border-2 border-dashed p-6 flex flex-col items-center justify-center cursor-pointer rounded-lg hover:bg-gray-50"

        >

          <span className="text-gray-500">

            Click to upload

          </span>

          <input

            type="file"

            multiple

            onChange={handleImageChange}

            hidden

          />

        </label>


        {/* PREVIEW */}

        <div className="grid grid-cols-3 gap-3 mt-3">

          {imagePreview.map((img, index) => (

            <div key={index} className="relative">

              <img

                src={img}

                className="h-24 w-full object-cover rounded"

              />

              <button

                type="button"

                onClick={() => removeImage(index)}

                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6"

              >

                ×

              </button>

            </div>

          ))}

        </div>


      </div>



      <button

        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"

      >

        Create Listing

      </button>


    </form>

  );

}