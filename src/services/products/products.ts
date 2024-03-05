import { apiClient } from '@/lib/api'
import {
  GetProductsListParams,
  Product,
  ProductsListResponse,
} from '@/services/products/products.type'
import { useQuery } from '@tanstack/react-query'

export const useGetProductsList = ({ limit, skip }: GetProductsListParams) => {
  return useQuery({
    queryKey: ['get-product-list', limit, skip],
    queryFn: () =>
      apiClient.get<ProductsListResponse>(
        `/products?limit=${limit}&skip=${skip}`
      ),
    retry: 0,
  })
}

export const useGetProduct = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ['get-product', id],
    queryFn: () => apiClient.get<Product>(`/products/${id}`),
    retry: 0,
  })
}
