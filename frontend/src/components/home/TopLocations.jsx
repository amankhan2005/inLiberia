 import { useEffect, useState } from "react";

import { getListings }

from "../../services/listingService";

import Container from "../common/Container";

import SectionTitle from "../common/SectionTitle";



export default function TopLocations() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {

    getListings()

      .then(data => {

        const unique = [

          ...new Set(data.map(l => l.location))

        ];

        setLocations(unique.slice(0, 6));

      });

  }, []);



  return (

    <Container className="py-16">

      <SectionTitle title="Top Locations" />



      <div className="grid md:grid-cols-3 gap-4">

        {locations.map(loc => (

          <div

            key={loc}

            className="bg-white shadow rounded-xl p-6"

          >

            {loc}

          </div>

        ))}

      </div>

    </Container>

  );

}