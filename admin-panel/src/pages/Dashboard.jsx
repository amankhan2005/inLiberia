 import {

  useEffect,

  useState

} from "react";

import StatsCard from "../components/dashboard/StatsCard";

import {

  getStats

} from "../services/adminService";


export default function Dashboard() {


  const [stats, setStats] = useState({

    users: 0,

    listings: 0,

    pending: 0,

    approved: 0

  });


  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchStats = async () => {

      try {

        const data = await getStats();

        setStats(data);

      }

      catch (error) {

        console.error(error);

      }

      finally {

        setLoading(false);

      }

    };


    fetchStats();

  }, []);




  if (loading)

    return <p>Loading...</p>;



  return (

    <div>


      <h2 className="text-2xl font-bold mb-6">

        Dashboard

      </h2>



      <div className="grid grid-cols-4 gap-6">


        <StatsCard

          title="Total Users"

          value={stats.users}

        />



        <StatsCard

          title="Total Listings"

          value={stats.listings}

        />



        <StatsCard

          title="Pending Listings"

          value={stats.pending}

        />



        <StatsCard

          title="Approved Listings"

          value={stats.approved}

        />


      </div>


    </div>

  );

}