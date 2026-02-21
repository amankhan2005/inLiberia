export default function ContactCard({

  listing

}) {



  return (

    <div className="bg-white shadow rounded-xl p-6">

      

      <h3 className="font-semibold mb-4">

        Contact Owner

      </h3>



      <p>

        📧 {listing.contactEmail}

      </p>



      <p>

        📞 {listing.contactPhone}

      </p>



      <button className="mt-4 w-full bg-red-600 text-white py-2 rounded">

        Send Message

      </button>



    </div>

  );

}