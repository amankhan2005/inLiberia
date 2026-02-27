 import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../services/api";

export default function VerifyEmail() {

const { token } = useParams();

const navigate = useNavigate();

const { setUser } = useAuth();

const [status, setStatus] = useState("verifying");

const [message, setMessage] = useState("");

useEffect(() => {

const verify = async () => {

try {

const res = await axios.get(`/auth/verify/${token}`);


// ⭐ SAVE TOKEN

localStorage.setItem(
"token",
res.data.token
);


// ⭐ SAVE USER

localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);


setUser(res.data.user);


// ⭐ SHOW MESSAGE FROM BACKEND

setMessage(res.data.message);


setStatus("success");


// ⭐ REDIRECT

setTimeout(() => {

navigate("/dashboard");

}, 2000);

}

catch (err) {

setStatus("error");

setMessage(

err.response?.data?.message ||

"Verification failed or expired"

);

}

};

verify();

}, [token]);


return (

<div className="min-h-screen flex items-center justify-center">

{status === "verifying" && (

<div className="text-gray-600 text-lg">

Verifying your email...

</div>

)}


{status === "success" && (

<div className="text-green-600 text-lg font-semibold">

✅ {message}

</div>

)}


{status === "error" && (

<div className="text-red-600 text-lg font-semibold">

❌ {message}

</div>

)}

</div>

);

}