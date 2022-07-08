import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useProduct(id) {
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)
  const [dataProduct, setProduct] = useState({})
  const { ref: apiRef, isLoadingProduct: isApiMetadataLoading } = useLatestAPI()

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getProduct() {
      try {
        setIsLoadingProduct(true)
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[:d+=+at(document.id,+"${id}")+]]`,
          {
            signal: controller.signal,
          }
        )
        const responseJson = await response.json()
        setProduct(responseJson)
        setIsLoadingProduct(false)
      } catch (error) {
        console.error(error)
        setProduct({})
        setIsLoadingProduct(false)
      }
    }
    getProduct()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, id])

  return {
    dataProduct,
    isLoadingProduct,
  }
}
