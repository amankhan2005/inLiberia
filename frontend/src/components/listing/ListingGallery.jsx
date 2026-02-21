 import { useState } from "react";

export default function ListingGallery({

  images

}) {



  const [active,

    setActive] = useState(images[0]);



  return (

    <div>

      

      {/* Main Image */}

      <img

        src={active}

        className="w-full h-96 object-cover rounded-xl"

      />



      {/* Thumbnails */}

      <div className="flex gap-2 mt-4">

        

        {images.map(img => (

          

          <img

            key={img}

            src={img}

            onClick={() => setActive(img)}

            className="w-20 h-20 object-cover rounded cursor-pointer border"

          />



        ))}



      </div>



    </div>

  );

}