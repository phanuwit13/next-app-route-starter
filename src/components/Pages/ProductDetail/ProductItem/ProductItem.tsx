'use client'

import { useProductItem } from './ProductItem.hook'

type Props = {
  productId: string
}

const ProductItem = ({ productId }: Props) => {
  const { productsResponse } = useProductItem({ id: productId })

  return <div>ProductItem {productsResponse?.data.id}</div>
}

export default ProductItem
