 import useAuth from "../../hooks/useAuth";

export default function Profile() {

  const { user } = useAuth();

  return (

    <div className="bg-white p-6 shadow rounded">

      <h2 className="font-bold text-xl">

        Profile

      </h2>

      <p>Name: {user?.name}</p>

      <p>Email: {user?.email}</p>

    </div>

  );

}