import TableProductsList from '@/components/Pages/ProductsList/TableProductsList/TableProductsList'
import Link from 'next/link'

type Props = {}

const ProductsPage = (props: Props) => {
  return (
    <div className='p-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[24px]'>ProductsPage</h1>
        <Link className='border bg-green-500 text-white px-2 py-1' href={`/products/create`}>Create</Link>
      </div>
      <div>
        <TableProductsList />
      </div>
    </div>
  )
}

export default ProductsPage
