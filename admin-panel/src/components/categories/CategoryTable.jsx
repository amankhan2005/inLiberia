 import CategoryRow from "./CategoryRow";
import { FolderIcon } from "@heroicons/react/24/outline";

export default function CategoryTable({
  categories = [],
  onDelete,
  onEdit
}) {
  // ⭐ SAFETY FILTER (VERY IMPORTANT)
  const validCategories = categories.filter(
    (cat) => cat && cat._id
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      
      {/* --- DESKTOP TABLE VIEW (md and up) --- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left min-w-[500px]">
          <thead className="bg-slate-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Category Name
              </th>
              <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                Icon
              </th>
              <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {validCategories.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-16">
                  <div className="flex flex-col items-center justify-center text-gray-400 space-y-3">
                    <FolderIcon className="w-12 h-12 opacity-30" />
                    <p className="font-medium text-gray-500">No categories found</p>
                    <p className="text-sm text-gray-400">Add your first category to get started.</p>
                  </div>
                </td>
              </tr>
            ) : (
              validCategories.map((category) => (
                <CategoryRow
                  key={category._id}
                  category={category}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* --- MOBILE CARD VIEW (Small screens) --- */}
      <div className="md:hidden divide-y divide-gray-100">
        {validCategories.length === 0 ? (
          <div className="p-10 text-center">
            <div className="flex flex-col items-center justify-center text-gray-400 space-y-3">
              <FolderIcon className="w-12 h-12 opacity-30" />
              <p className="font-medium text-gray-500">No categories found</p>
            </div>
          </div>
        ) : (
          validCategories.map((category) => (
            <div key={category._id} className="p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                   {category.icon ? (
                     <img 
                       src={category.icon} 
                       alt={category.name} 
                       className="w-12 h-12 rounded-xl object-cover border border-gray-100 shadow-sm"
                     />
                   ) : (
                     <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                       <FolderIcon className="w-6 h-6 text-gray-300"/>
                     </div>
                   )}
                </div>
                
                {/* Name & Actions */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 truncate">{category.name}</p>
                  
                  {/* Mobile Action Buttons */}
                  <div className="flex gap-3 mt-2">
                     <button 
                       onClick={() => onEdit(category)}
                       className="text-xs font-semibold text-[#144474] hover:underline"
                     >
                       Edit
                     </button>
                     <button 
                       onClick={() => onDelete(category._id)}
                       className="text-xs font-semibold text-red-500 hover:underline"
                     >
                       Delete
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}