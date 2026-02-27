 import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../services/api";

export default function VerifyEmail() {

const { token } = useParams();

const navigate = useNavigate();

const { setUser } = useAuth();

const [status, setStatus] = useState("verifying");


useEffect(() => {

const verify = async () => {

try {

const res = await axios.get(`/auth/verify/${token}`);


// ⭐ CASE 1: already verified

if (res.data.alreadyVerified) {

setStatus("success");

setTimeout(() => {

navigate("/dashboard");

}, 1500);

return;

}


// ⭐ CASE 2: normal verify

if (res.data.token) {

localStorage.setItem("token", res.data.token);

}

if (res.data.user) {

localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);

setUser(res.data.user);

}


setStatus("success");


setTimeout(() => {

navigate("/dashboard");

}, 1500);


}

catch (err) {

console.log(err);

setStatus("error");

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

✅ Email verified successfully

</div>

)}


{status === "error" && (

<div className="text-red-600 text-lg font-semibold">

❌ Verification failed or expired

</div>

)}

</div>

);

}