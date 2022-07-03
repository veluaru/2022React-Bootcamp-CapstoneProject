import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useProducts(page) {
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [dataProducts, setProducts] = useState({})
  const { ref: apiRef, isLoadingProducts: isApiMetadataLoading } =
    useLatestAPI()

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getAllProducts() {
      try {
        setIsLoadingProducts(true)
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=12&page=${page}`,
          {
            signal: controller.signal,
          }
        )
        const responseJson = await response.json()
        setProducts(responseJson)
        setIsLoadingProducts(false)
      } catch (error) {
        console.error(error)
        setProducts({})
        setIsLoadingProducts(false)
      }
    }
    getAllProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, page])

  return {
    dataProducts,
    isLoadingProducts,
  }
}
