 import {

  useEffect,

  useState

} from "react";

import ListingTable from

"../components/listings/ListingTable";

import {

  getAllListings,

  approveListing,

  rejectListing,

  deleteListing

}

from "../services/adminService";


export default function Listings() {


  const [listings, setListings] =

  useState([]);




  const loadListings = async () => {

    const data = await getAllListings();

    setListings(data);

  };



  useEffect(() => {

    loadListings();

  }, []);




  const handleApprove = async (id) => {

    await approveListing(id);

    loadListings();

  };



  const handleReject = async (id) => {

    await rejectListing(id);

    loadListings();

  };



  const handleDelete = async (id) => {

    await deleteListing(id);

    loadListings();

  };



  return (

    <div>


      <h2 className="text-2xl font-bold mb-4">

        Listings

      </h2>



      <ListingTable

        listings={listings}

        onApprove={handleApprove}

        onReject={handleReject}

        onDelete={handleDelete}

      />


    </div>

  );

}