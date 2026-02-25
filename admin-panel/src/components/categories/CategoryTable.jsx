 import CategoryRow from "./CategoryRow";

export default function CategoryTable({
  categories,
  onDelete,
  onEdit
}) {

  return (

    <div className="bg-white shadow-sm rounded-xl overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-50 border-b">

          <tr>

            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
              Category Name
            </th>

            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-center">
              Icon
            </th>

            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
              Action
            </th>

          </tr>

        </thead>


        <tbody className="divide-y">

          {categories.map((category) => (

            <CategoryRow
              key={category._id}
              category={category}
              onDelete={onDelete}
              onEdit={onEdit}
            />

          ))}

        </tbody>

      </table>

    </div>

  );

}