import {

  useState

} from "react";

import {

  useNavigate

} from "react-router-dom";

import useAdminAuth from "../hooks/useAdminAuth";


export default function Login() {


  const {

    login

  } = useAdminAuth();


  const navigate = useNavigate();


  const [form, setForm] = useState({

    email: "",

    password: ""

  });



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:

      e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      await login(form);

      navigate("/");

    }

    catch {

      alert("Not admin");

    }

  };



  return (

    <div className="h-screen flex items-center justify-center">


      <form

        onSubmit={handleSubmit}

        className="bg-white p-6 shadow rounded w-80"

      >


        <h2 className="text-xl mb-4">

          Admin Login

        </h2>



        <input

          name="email"

          placeholder="Email"

          onChange={handleChange}

          className="border p-2 w-full mb-3"

        />



        <input

          name="password"

          type="password"

          placeholder="Password"

          onChange={handleChange}

          className="border p-2 w-full mb-3"

        />



        <button

          className="bg-red-600 text-white w-full py-2"

        >

          Login

        </button>


      </form>


    </div>

  );

}