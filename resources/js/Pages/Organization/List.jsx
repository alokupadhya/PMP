import TableContainer from '@/Components/TableContainer'
import OrganizationConstant from '@/Utils/Constant/Organization'
import React from 'react'
import Faker from './Faker'

const tableDataBinder = (data, key) => {
    return <tr key={key} className='border'>
        <td className='text-left px-6 py-3'>{data.id}</td>
        <td className='text-left px-6 py-3'>{data.title}</td>
        <td className='text-left px-6 py-3'>{data.team_size}</td>
        <td className='text-left px-6 py-3'>{data.team}</td>
        <td className='text-left px-6 py-3'>{data.projects}</td>
        <td className='text-center px-6 py-3'>{data.created_at}</td>
        <td className='text-center px-6 py-3'>{data.updated_at}</td>
    </tr>
}

export default function List() {
    return (
        <TableContainer theadColumns={OrganizationConstant.theadColumns} mod="dark" >
            {
                Faker.Data.map( (data, key) => { return tableDataBinder(data, key)} )
            }
        </TableContainer>
    )
}
