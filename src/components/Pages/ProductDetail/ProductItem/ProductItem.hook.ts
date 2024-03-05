import { useGetProduct } from '@/services/products/products'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemaFormProduct = z.object({
  id: z.number(),
  title: z.string().trim().min(1, {
    message: 'please enter Password',
  }),
  description: z.string().trim().min(1, {
    message: 'please enter Password',
  }),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string().trim().min(1, {
    message: 'please enter Password',
  }),
  category: z.string().trim().min(1, {
    message: 'please enter Password',
  }),
  thumbnail: z.string().trim().min(1, {
    message: 'please enter Password',
  }),
  images: z.array(
    z.string().trim().min(1, {
      message: 'please enter Password',
    })
  ),
})

type SchemaFormProduct = z.infer<typeof schemaFormProduct>

const useProductItem = ({ id }: { id: string }) => {
  const { data: productsResponse } = useGetProduct({ id })

  const { register } = useForm<SchemaFormProduct>({
    defaultValues: productsResponse?.data || {},
  })

  // const form = {
  //   filed
  // }

  return { productsResponse }
}

export { useProductItem }

