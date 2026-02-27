 import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

export default function VerifyEmail() {

  const { token } = useParams();

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [status, setStatus] = useState("verifying");

  const [message, setMessage] = useState("");


  useEffect(() => {

    const verifyEmail = async () => {

      try {

        // ✅ FINAL CORRECT API CALL
        const res = await api.get(`/api/auth/verify/${token}`);


        // save token
        if (res.data.token) {

          localStorage.setItem(
            "token",
            res.data.token
          );

        }


        // save user
        if (res.data.user) {

          localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
          );

          setUser(res.data.user);

        }


        setMessage(res.data.message);

        setStatus("success");


        setTimeout(() => {

          navigate("/dashboard");

        }, 2000);


      }

      catch (err) {

        console.log(err);

        setStatus("error");

        setMessage(

          err.response?.data?.message ||

          "Verification failed or expired"

        );

      }

    };


    verifyEmail();

  }, [token]);


  return (

    <div className="min-h-screen flex items-center justify-center">

      {status === "verifying" && (

        <div>Verifying your email...</div>

      )}


      {status === "success" && (

        <div className="text-green-600 font-semibold">

          ✅ {message}

        </div>

      )}


      {status === "error" && (

        <div className="text-red-600 font-semibold">

          ❌ {message}

        </div>

      )}

    </div>

  );

}