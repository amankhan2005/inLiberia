 import { useEffect, useState } from "react";

import {
  getMyListings,
  deleteListing
}
from "../../services/listingService";

import ListingItem
from "../../components/dashboard/ListingItem";

export default function MyListings() {

  const [listings, setListings] = useState([]);

  useEffect(() => {

    load();

  }, []);

  const load = () => {

    getMyListings()
      .then(setListings);

  };

  const handleDelete = async id => {

    await deleteListing(id);

    load();

  };

  return (

    <div className="space-y-4">

      {listings.map(item => (

        <ListingItem
          key={item._id}
          listing={item}
          onDelete={handleDelete}
        />

      ))}

    </div>

  );

}