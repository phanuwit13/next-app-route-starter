import { useGetProductsList } from '@/services/products/products'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import PermissionButton from '@/app/permissionButton'
import Pagination from '@/components/Pagination'
import TableLoading from '@/components/TableLoading'
import { Product } from '@/services/products/products.type'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Image from 'next/image'
import Link from 'next/link'
import DeleteProductButton from '../DeleteProductButton'
import SortButton from '../../SortButton'

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.accessor('id', {
    id: 'id',
    cell: (info) => info.getValue(),
    header: () => <span>Product ID</span>,
  }),
  columnHelper.accessor('title', {
    header: () => <span>Title</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('brand', {
    header: () => <span>Band</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('category', {
    header: () => <span>category</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: () => <span>price</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('stock', {
    header: () => (
      <SortButton sortBy='stock' sortType='desc'>
        stock
      </SortButton>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('thumbnail', {
    header: () => <span>Image</span>,
    cell: (info) => (
      <div className='text-right'>
        <Image
          src={info.getValue()}
          alt=''
          width={500}
          height={500}
          className='w-12 h-12 object-cover'
        />
      </div>
    ),
  }),
  columnHelper.display({
    id: 'action',
    header: () => <div className='w-full min-w-[60px] text-center'>Action</div>,
    cell: (props) => (
      <div className='flex gap-2'>
        <PermissionButton permission='PRODUCT_PAGE_UPDATE'>
          <Link
            className='border py-1 px-2'
            href={`/products/${props.row.original.id}`}
          >
            Edit
          </Link>
        </PermissionButton>
        <PermissionButton permission='PRODUCT_PAGE_DELETE'>
          <DeleteProductButton productId={String(props.row.original.id)}>
            Delete
          </DeleteProductButton>
        </PermissionButton>
      </div>
    ),
  }),
]

const useTableProductsList = () => {
  const searchParams = useSearchParams()

  const limit = searchParams.get('limit') || '10'
  const skip = searchParams.get('skip') || '0'
  const sortBy = searchParams.get('sortBy') || ''
  const sortType = searchParams.get('sortType') || ''

  const { data: productsList, isLoading } = useGetProductsList({
    limit: Number(limit),
    skip: Number(skip),
    sortBy,
    sortType
  })

  return { productsList, isLoading, limit, skip, columns }
}

export { useTableProductsList }
