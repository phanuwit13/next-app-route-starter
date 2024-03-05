import ProductItem from '@/components/Pages/ProductDetail/ProductItem/ProductItem'

interface Props {
  params: { id: string }
}

const ProductDetail = ({ params: { id } }: Props) => {
  return (
    <div className='max-w-[1200px] w-full m-auto p-8'>
      <ProductItem productId={id} />
    </div>
  )
}

export default ProductDetail
