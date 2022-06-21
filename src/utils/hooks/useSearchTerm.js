import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useSearchTerm(term) {
  const { ref: apiRef, isLoadingSearchTerm: isApiMetadataLoading } = useLatestAPI()
  const [searchTerm, setSearchTerm] = useState(() => ({
    dataSearchTerm: {},
    isLoadingSearchTerm: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { }
    }

    const controller = new AbortController()

    async function getSearchTerm() {
      try {
        setSearchTerm({
          dataSearchTerm: {},
          isLoadingSearchTerm: true,
        })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(
            '[[fulltext(document, "'+term+'")]]'
          )}&lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        )
        const dataSearchTerm = await response.json()
        setSearchTerm({ dataSearchTerm, isLoadingSearchTerm: false })
      } catch (err) {
        setSearchTerm({
          dataSearchTerm: {},
          isLoadingSearchTerm: false,
        })
        console.error(err)
      }
    }

    getSearchTerm()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, term])

  return searchTerm
}
