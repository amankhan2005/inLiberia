// export default function StatsCard({

//   title,

//   value

// }) {

//   return (

//     <div className="bg-white shadow rounded-xl p-6">


//       <h3 className="text-gray-500">

//         {title}

//       </h3>


//       <p className="text-3xl font-bold mt-2 text-red-600">

//         {value ?? 0}

//       </p>


//     </div>

//   );

// }


 // components/dashboard/StatsCard.jsx
export default function StatsCard({ title, value, icon }) {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Decorative background shape */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>

      <div className="relative flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {title}
          </p>
          <p className="text-4xl font-extrabold text-gray-900">
            {value ?? 0}
          </p>
        </div>

        {/* Icon Container */}
        {icon && (
          <div className="bg-red-600 text-white p-3 rounded-xl shadow-md">
            {icon}
          </div>
        )}
      </div>
      
    </div>
  );
}