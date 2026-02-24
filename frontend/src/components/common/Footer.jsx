 import Container from "./Container";
import logo from "../../assets/inliberia-logo.png";
import {
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaChevronRight
} from "react-icons/fa";


export default function Footer() {

return (

<footer className="bg-black text-gray-400">


<Container className="py-14">


<div className="grid md:grid-cols-3 gap-12">


{/* BRAND */}

<div>

<img
  src={logo}
  alt="inLiberia Logo"
  className="h-20 bg-white object-contain p-2 rounded-md mb-4"
/>

<p className="text-gray-500 leading-relaxed max-w-sm">

Discover verified residential and commercial
properties across Liberia with complete trust,
transparency, and security.

</p>

<div className="flex items-center gap-3 mt-5 text-sm">

<FaMapMarkerAlt className="text-red-600"/>

<span>Monrovia, Liberia</span>

</div>

</div>



{/* LINKS */}

<div>

<h3 className="text-white text-lg font-semibold mb-4">

Quick Links

</h3>


<ul className="space-y-3">


<li className="flex items-center gap-2">

<FaChevronRight className="text-red-600 text-xs"/>

<a
href="/browse"
className="hover:text-white transition"
>

Browse Properties

</a>

</li>


<li className="flex items-center gap-2">

<FaChevronRight className="text-red-600 text-xs"/>

<a
href="/categories/Residence"
className="hover:text-white transition"
>

Residence

</a>

</li>


<li className="flex items-center gap-2">

<FaChevronRight className="text-red-600 text-xs"/>

<a
href="/categories/Business"
className="hover:text-white transition"
>

Business

</a>

</li>


<li className="flex items-center gap-2">

<FaChevronRight className="text-red-600 text-xs"/>

<a
href="/dashboard/add"
className="hover:text-white transition"
>

Post Property

</a>

</li>


</ul>


</div>



{/* CONTACT */}

<div>

<h3 className="text-white text-lg font-semibold mb-4">

Contact Us

</h3>


<div className="space-y-4 text-sm">


{/* EMAIL */}

<a
href="mailto:support@inliberia.com"
className="flex items-center gap-3 hover:text-white transition"
>

<FaEnvelope className="text-red-600"/>

info@knowliberia.com

</a>



{/* PHONE */}

<a
href="tel:+231771234567"
className="flex items-center gap-3 hover:text-white transition"
>

<FaPhone className="text-red-600"/>

+231 77 123 4567

</a>


</div>


</div>


</div>



{/* BOTTOM */}

<div className="border-t border-red-600/30 mt-12 pt-6">


<div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">


<p className="text-gray-500">

© 2026 inLiberia. All rights reserved.

</p>


<p className="text-gray-600">
Design and developed by{" "}
<a
href="https://www.webieapp.com/"
target="_blank"
rel="noopener noreferrer"
className="text-red-600 hover:text-red-500 font-medium transition"
>
WebieApp
</a>
</p>


</div>


</div>



</Container>


</footer>

);

}