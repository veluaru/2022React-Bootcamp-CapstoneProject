import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedCategories() {
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [dataCategories, setCategories] = useState({})
  const { ref: apiRef, isLoadingCategories: isApiMetadataLoading } =
    useLatestAPI()

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getAllFeaturedCategories() {
      try {
        setIsLoadingCategories(true)
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        )
        const responseJson = await response.json()
        setCategories(responseJson)
        setIsLoadingCategories(false)
      } catch (error) {
        console.error(error)
        setCategories({})
        setIsLoadingCategories(false)
      }
    }
    getAllFeaturedCategories()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return {
    dataCategories,
    isLoadingCategories,
  }
}
