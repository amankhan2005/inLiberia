 import useAuth from "../../hooks/useAuth";

export default function DashboardHeader() {

  const { user } = useAuth();

  return (

    <header className="bg-white shadow px-6 py-4">

      <h1 className="font-semibold">

        Welcome, {user?.name}

      </h1>

    </header>

  );

}