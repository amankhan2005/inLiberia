 import { useState } from "react";

import { createListing }
from "../../services/listingService";

import { useNavigate }
from "react-router-dom";

export default function AddListing() {

  const navigate = useNavigate();

  const [form, setForm] = useState({

    title: "",
    price: "",
    location: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    images: []

  });

  const handleChange = e => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async e => {

    e.preventDefault();

    await createListing(form);

    navigate("/dashboard/my");

  };

  return (

    <form onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >

      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        className="bg-red-600 text-white px-4 py-2 rounded"
      >

        Add Listing

      </button>

    </form>

  );

}