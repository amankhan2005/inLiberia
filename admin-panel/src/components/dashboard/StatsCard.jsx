export default function StatsCard({

  title,

  value

}) {

  return (

    <div className="bg-white shadow rounded-xl p-6">


      <h3 className="text-gray-500">

        {title}

      </h3>


      <p className="text-3xl font-bold mt-2 text-red-600">

        {value ?? 0}

      </p>


    </div>

  );

}