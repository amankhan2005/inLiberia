// src/components/common/SectionTitle.jsx

export default function SectionTitle({

  title,

  subtitle,

  center = false,

}) {

  return (

    <div className={`${center ? "text-center" : ""} mb-8`}>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">

        {title}

      </h2>



      {subtitle && (

        <p className="text-gray-500 mt-2">

          {subtitle}

        </p>

      )}

    </div>

  );

}