 import { useState } from "react";



export default function ForgotPassword() {



  const [email, setEmail] = useState("");



  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Reset link sent");

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      

      <form

        onSubmit={handleSubmit}

        className="bg-white shadow rounded-xl p-6 w-full max-w-md"

      >

        

        <h2 className="text-xl font-bold mb-4">

          Reset Password

        </h2>



        <input

          type="email"

          placeholder="Email"

          required

          onChange={(e)=>setEmail(e.target.value)}

          className="w-full border px-3 py-2 mb-4 rounded"

        />



        <button

          className="w-full bg-red-600 text-white py-2 rounded"

        >

          Send Reset Link

        </button>



      </form>



    </div>

  );

}