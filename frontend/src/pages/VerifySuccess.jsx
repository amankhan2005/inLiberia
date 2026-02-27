 import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VerifySuccess() {

const navigate = useNavigate();


// ⭐ auto redirect

useEffect(() => {

const timer = setTimeout(() => {

navigate("/dashboard");

}, 3000);


return () => clearTimeout(timer);

}, []);



return (

<div className="min-h-screen flex items-center justify-center bg-gray-50">

<div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-md w-full">


{/* Icon */}

<div className="text-5xl mb-4">

✅

</div>


{/* Heading */}

<h1 className="text-2xl font-bold text-green-600">

Email Verified Successfully

</h1>


{/* Text */}

<p className="mt-3 text-gray-600">

Your account is now active.

</p>


<p className="text-sm text-gray-400 mt-2">

Redirecting to dashboard...

</p>


{/* Button */}

<Link

to="/dashboard"

className="mt-6 inline-block bg-[#144474] hover:bg-[#0f345a] text-white px-6 py-2 rounded-lg transition"

>

Go to Dashboard

</Link>


</div>

</div>

);

}