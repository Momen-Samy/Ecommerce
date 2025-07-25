import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from './types' // Product type


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  endpoints: (builder) => ({
    getproductByName: builder.query<{ data: Product[] }, string>({
      query: (name) => `${name}`,
    }),
  }),
})


export const { useGetproductByNameQuery } = productApi