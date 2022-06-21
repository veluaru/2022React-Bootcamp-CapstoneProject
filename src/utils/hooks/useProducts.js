import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useProducts(page) {
  const { ref: apiRef, isLoadingProducts: isApiMetadataLoading } =
    useLatestAPI()
  const [products, setProducts] = useState(() => ({
    dataProducts: {},
    isLoadingProducts: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getProducts() {
      try {
        setProducts({
          dataProducts: {},
          isLoadingProducts: true,
        })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=12&page=${page}`,
          {
            signal: controller.signal,
          }
        )
        const dataProducts = await response.json()
        setProducts({ dataProducts, isLoadingProducts: false })
      } catch (err) {
        setProducts({
          dataProducts: {},
          isLoadingProducts: false,
        })
        console.error(err)
      }
    }

    getProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, page])

  return products
}
