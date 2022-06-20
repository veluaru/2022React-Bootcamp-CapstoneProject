import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedProducts() {
  const { ref: apiRef, isLoadingFeaturedProducts: isApiMetadataLoading } =
    useLatestAPI()
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    dataFeaturedProducts: {},
    isLoadingFeaturedProducts: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getFeaturedProducts() {
      try {
        setFeaturedProducts({
          dataFeaturedProducts: {},
          isLoadingFeaturedProducts: true,
        })

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
        const dataFeaturedProducts = await response.json()

        setFeaturedProducts({
          dataFeaturedProducts,
          isLoadingFeaturedProducts: false,
        })
      } catch (err) {
        setFeaturedProducts({
          dataFeaturedProducts: {},
          isLoadingFeaturedProducts: false,
        })
        console.error(err)
      }
    }

    getFeaturedProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return featuredProducts
}
