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

        const res =
          await axios.get(`/auth/verify/${token}`);


        /*
        ==========================
        SAVE TOKEN SAFELY
        ==========================
        */

        if(res.data.token){

          localStorage.setItem(
            "token",
            res.data.token
          );

        }


        /*
        ==========================
        SAVE USER SAFELY
        ==========================
        */

        if(res.data.user){

          localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
          );

          setUser(res.data.user);

        }


        /*
        ==========================
        SHOW BACKEND MESSAGE
        ==========================
        */

        setMessage(
          res.data.message ||
          "Email verified successfully"
        );


        setStatus("success");


        /*
        ==========================
        REDIRECT
        ==========================
        */

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


  }, [token, navigate, setUser]);



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      {status === "verifying" && (

        <div className="text-gray-600 text-lg font-medium">

          Verifying your email...

        </div>

      )}


      {status === "success" && (

        <div className="text-green-600 text-lg font-semibold">

          ✅ {message}

          <div className="text-sm text-gray-400 mt-2">

            Redirecting to dashboard...

          </div>

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