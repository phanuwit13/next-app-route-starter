'use client'

import Pagination from '@/components/Pagination'
import TableLoading from '@/components/TableLoading'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTableProductsList } from './TableProductsList.hook'

const TableProductsList = () => {
  const { productsList, isLoading, limit, skip, columns } =
    useTableProductsList()

  const table = useReactTable({
    data: productsList?.data.products || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading) {
    return <TableLoading />
  }

  return (
    <div className='p-2 px-1 min-h-[398px] '>
      {productsList?.data.products.length ? (
        <div className='w-full overflow-x-auto px-2'>
          <table className='w-full'>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className='text-gray-400 text-[12px] font-semibold text-start py-4 uppercase px-2'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className='border-b border-dashed'>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='py-3 px-2 text-[14px]'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='min-h-[300px] flex justify-center items-center font-semibold text-gray-200'>
          Data Not found
        </div>
      )}

      {productsList?.data?.total && Number(limit) && (
        <div className='flex justify-end mt-4'>
          <Pagination
            currentPage={(Number(skip) + Number(limit)) / Number(limit)}
            itemsPerPage={Number(limit) || 5}
            total={productsList.data.total}
          />
        </div>
      )}
    </div>
  )
}

export default TableProductsList
