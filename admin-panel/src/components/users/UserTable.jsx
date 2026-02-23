import UserRow from "./UserRow";

export default function UserTable({

  users,

  onDelete

}) {

  return (

    <table className="w-full bg-white shadow rounded">


      <thead>

        <tr className="bg-gray-100">


          <th className="p-3 text-left">

            Name

          </th>


          <th>

            Email

          </th>


          <th>

            Role

          </th>


          <th>

            Action

          </th>


        </tr>

      </thead>


      <tbody>


        {users.map(user => (

          <UserRow

            key={user._id}

            user={user}

            onDelete={onDelete}

          />

        ))}


      </tbody>


    </table>

  );

}