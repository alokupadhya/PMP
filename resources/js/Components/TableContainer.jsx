import TableMod from "@/Utils/Theme/TableMod"


export default function TableContainer({
    theadColumns,
    children,
    mod="light",
}) {
  return (
    <table className={`w-full ${TableMod[mod].table}`} >
      <thead className={`text-md uppercase ${TableMod[mod].thead}`}>
        <tr>
        {
          theadColumns.map((col, index) => {
            return <th key={index} scope="col" className={`px-6 py-3 ${col.align}`} >{col.title}</th>
          })
        }
        </tr>
      </thead>
      <tbody className={`text-md`}>
          {children}
      </tbody>
    </table>
  )
}
