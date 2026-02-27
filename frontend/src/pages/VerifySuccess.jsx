 import { Link } from "react-router-dom";

export default function VerifySuccess() {

return (

<div className="min-h-screen flex items-center justify-center">

<div className="text-center">

<h1 className="text-3xl font-bold text-green-600">

Email Verified Successfully 🎉

</h1>


<p className="mt-3">

Your account is now active.

</p>


<Link

to="/dashboard"

className="mt-5 inline-block bg-[#144474] text-white px-6 py-2 rounded"

>

Go to Dashboard

</Link>


</div>

</div>

);

}