 import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";



export default function Signup() {



  const navigate = useNavigate();

  const { signup } = useAuth();



  const [form, setForm] = useState({

    name: "",

    email: "",

    password: ""

  });



  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");



    try {

      await signup(form);

      navigate("/dashboard");



    } catch (err) {

      setError(

        err.response?.data?.message ||

        "Signup failed"

      );

    }



    setLoading(false);

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      

      <form

        onSubmit={handleSubmit}

        className="bg-white shadow rounded-xl p-6 w-full max-w-md"

      >

        

        <h2 className="text-2xl font-bold mb-6 text-center">

          Signup

        </h2>



        {error && (

          <p className="text-red-600 mb-3">

            {error}

          </p>

        )}



        <input

          type="text"

          name="name"

          placeholder="Full Name"

          required

          onChange={handleChange}

          className="w-full border px-3 py-2 mb-4 rounded"

        />



        <input

          type="email"

          name="email"

          placeholder="Email"

          required

          onChange={handleChange}

          className="w-full border px-3 py-2 mb-4 rounded"

        />



        <input

          type="password"

          name="password"

          placeholder="Password"

          required

          onChange={handleChange}

          className="w-full border px-3 py-2 mb-4 rounded"

        />



        <button

          disabled={loading}

          className="w-full bg-red-600 text-white py-2 rounded"

        >

          {loading ? "Loading..." : "Signup"}

        </button>



        <p className="mt-4 text-center">

          Already have account?

          <Link

            to="/login"

            className="text-red-600 ml-1"

          >

            Login

          </Link>

        </p>



      </form>



    </div>

  );

}