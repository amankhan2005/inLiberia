import { useEffect, useState } from "react";

import { getFeaturedListings }

from "../../services/listingService";

import Container from "../common/Container";

import SectionTitle from "../common/SectionTitle";

import ListingCard from "../listing/ListingCard";



export default function FeaturedListings() {

  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    getFeaturedListings()

      .then(data => {

        setListings(data);

        setLoading(false);

      });

  }, []);



  if (loading) return null;



  return (

    <Container className="py-16">

      <SectionTitle

        title="Featured Properties"

      />



      <div className="grid md:grid-cols-3 gap-6">

        {listings.map(item => (

          <ListingCard

            key={item._id}

            listing={item}

          />

        ))}

      </div>

    </Container>

  );

}