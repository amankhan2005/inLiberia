export default function SortDropdown({

  onSort

}) {



  return (

    <select

      onChange={(e) => onSort(e.target.value)}

      className="border px-3 py-2 rounded"

    >

      

      <option value="">

        Default

      </option>



      <option value="price_asc">

        Price Low → High

      </option>



      <option value="price_desc">

        Price High → Low

      </option>



      <option value="newest">

        Newest

      </option>



    </select>

  );

}