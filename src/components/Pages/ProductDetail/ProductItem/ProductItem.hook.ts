import {
  useGetCategoriesList,
  useGetProduct,
  usePostProduct,
  usePutProduct,
} from '@/services/products/products'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
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

const useProductItem = ({ id }: { id?: string }) => {
  const isCreate = id === undefined

  const { data: productsResponse } = useGetProduct({
    id: id || '',
    enabled: !isCreate,
  })
  const { data: categoryResponse } = useGetCategoriesList()
  const mutateCreateProduct = usePostProduct()
  const mutateUpdateProduct = usePutProduct()
  const router = useRouter()

  const { register, control, reset, handleSubmit } =
    useForm<SchemaFormProduct>()

  useEffect(() => {
    if (productsResponse?.data) {
      reset(productsResponse.data)
    }
  }, [productsResponse?.data, reset])

  const onSubmit = (v: SchemaFormProduct) => {
    const mutate = isCreate ? mutateCreateProduct : mutateUpdateProduct

    mutate.mutateAsync(v, {
      onSuccess: () => {
        alert('save success')
        router.push('/products')
      },
      onError: (err) => {
        alert(`error : ${err.message}`)
      },
    })
  }

  const form = {
    filedTitle: register('title'),
    filedDescription: register('description'),
    filedPrice: register('price'),
    filedDiscountPercentage: register('discountPercentage'),
    filedRating: register('rating'),
    filedBrand: register('brand'),
    filedCategory: register('category'),
    filedThumbnail: register('thumbnail'),
    filedImages: register('images'),
    control,
    handleSubmit: handleSubmit(onSubmit),
  }

  return { productsResponse, categoryResponse, form }
}

export { useProductItem }

