import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedProducts() {
  const [isLoadingFeaturedProducts, setIsLoadingFeaturedProducts] =
    useState(true)
  const [dataFeaturedProducts, setFeaturedProducts] = useState({})
  const { ref: apiRef, isLoadingFeaturedProducts: isApiMetadataLoading } =
    useLatestAPI()

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getAllFeaturedProducts() {
      try {
        setIsLoadingFeaturedProducts(true)
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(
            '[[at(document.tags, ["Featured"])]]'
          )}&lang=en-us&pageSize=16`,
          {
            signal: controller.signal,
          }
        )
        const responseJson = await response.json()
        setFeaturedProducts(responseJson)
        setIsLoadingFeaturedProducts(false)
      } catch (error) {
        console.error(error)
        setFeaturedProducts({})
        setIsLoadingFeaturedProducts(false)
      }
    }
    getAllFeaturedProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return {
    dataFeaturedProducts,
    isLoadingFeaturedProducts,
  }
}
