import { useState } from "react";

import { useNavigate, Link }

from "react-router-dom";

import useAuth

from "../../hooks/useAuth";


export default function Login() {


  const navigate = useNavigate();


  const { login } = useAuth();



  const [form, setForm] = useState({

    email: "",

    password: ""

  });



  const [loading, setLoading] = useState(false);


  const [error, setError] = useState("");



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:

      e.target.value

    });

  };



  const handleSubmit = async (e) => {


    e.preventDefault();


    setLoading(true);


    setError("");



    try {


      await login(form);


      navigate("/");


    }


    catch (err) {


      setError(

        err.response?.data?.message ||

        "Login failed"

      );

    }


    setLoading(false);

  };



  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">



      <form

        onSubmit={handleSubmit}

        className="bg-white p-6 rounded-xl shadow w-full max-w-md"

      >



        <h2 className="text-2xl font-bold mb-4">

          Login

        </h2>



        {error && (

          <p className="text-red-600">

            {error}

          </p>

        )}



        <input

          name="email"

          placeholder="Email"

          value={form.email}

          onChange={handleChange}

          className="w-full border p-2 mb-3"

        />



        <input

          name="password"

          type="password"

          placeholder="Password"

          value={form.password}

          onChange={handleChange}

          className="w-full border p-2 mb-3"

        />



        <button

          className="w-full bg-red-600 text-white py-2"

        >

          Login

        </button>



        <p className="mt-3">

          No account?

          <Link to="/signup">

            Signup

          </Link>

        </p>



      </form>

    </div>

  );

}