import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedCategories() {
  const { ref: apiRef, isLoadingCategories: isApiMetadataLoading } =
    useLatestAPI()
  const [featuredCategories, setFeaturedCategories] = useState(() => ({
    dataCategories: {},
    isLoadingCategories: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getFeaturedCategories() {
      try {
        setFeaturedCategories({
          dataCategories: {},
          isLoadingCategories: true,
        })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          }
        )
        const dataCategories = await response.json()

        setFeaturedCategories({
          dataCategories,
          isLoadingCategories: false,
        })
      } catch (err) {
        setFeaturedCategories({
          dataCategories: {},
          isLoadingCategories: false,
        })
        console.error(err)
      }
    }

    getFeaturedCategories()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return featuredCategories
}
