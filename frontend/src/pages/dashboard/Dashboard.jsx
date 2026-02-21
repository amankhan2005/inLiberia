 import StatsCard from "../../components/dashboard/StatsCard";

import { useEffect, useState } from "react";

import { getMyListings } from "../../services/listingService";

export default function Dashboard() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    getMyListings().then(data =>
      setCount(data.length)
    );

  }, []);

  return (

    <div className="grid md:grid-cols-3 gap-6">

      <StatsCard
        title="My Listings"
        value={count}
      />

    </div>

  );

}