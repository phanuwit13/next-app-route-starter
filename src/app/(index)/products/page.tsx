import TableProductsList from '@/components/Pages/ProductsList/TableProductsList/TableProductsList'

type Props = {}

const ProductsPage = (props: Props) => {
  return (
    <div className='p-8'>
      <h1 className='text-[24px]'>ProductsPage</h1>
      <div>
        <TableProductsList />
      </div>
    </div>
  )
}

export default ProductsPage
