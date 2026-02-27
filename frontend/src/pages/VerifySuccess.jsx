 import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../services/api";

export default function VerifySuccess() {

const navigate = useNavigate();

const { setUser } = useAuth();


// ⭐ refresh current user

useEffect(() => {

const loadUser = async () => {

try {

const res = await axios.get("/auth/me");

setUser(res.data);

localStorage.setItem(
"user",
JSON.stringify(res.data)
);

}

catch (err) {

console.log(err);

}

};


loadUser();


// ⭐ auto redirect

const timer = setTimeout(() => {

navigate("/dashboard");

}, 3000);


return () => clearTimeout(timer);

}, []);



return (

<div className="min-h-screen flex items-center justify-center bg-gray-50">

<div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-md w-full">


<div className="text-5xl mb-4">

✅

</div>


<h1 className="text-2xl font-bold text-green-600">

Email Verified Successfully

</h1>


<p className="mt-3 text-gray-600">

Your account is now active.

</p>


<p className="text-sm text-gray-400 mt-2">

Redirecting to dashboard...

</p>


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