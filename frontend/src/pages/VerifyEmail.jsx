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


// backend should return user + token
// example:
// { user, token }


localStorage.setItem("token", res.data.token);


setUser(res.data.user);


setStatus("success");


// redirect after 2 sec

setTimeout(() => {

navigate("/verify-success");

}, 2000);


}

catch (err) {

setStatus("error");

}

};


verify();

}, []);



return (

<div className="min-h-screen flex items-center justify-center">


{status === "verifying" && (

<div>Verifying your email...</div>

)}


{status === "success" && (

<div className="text-green-600">

Email verified successfully. Logging you in...

</div>

)}


{status === "error" && (

<div className="text-red-600">

Verification failed

</div>

)}


</div>

);

}