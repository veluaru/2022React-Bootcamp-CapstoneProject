import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useProduct(id) {
  const { ref: apiRef, isLoadingProduct: isApiMetadataLoading } =
    useLatestAPI()
  const [product, setProduct] = useState(() => ({
    dataProduct: {},
    isLoadingProduct: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { }
    }

    const controller = new AbortController()

    async function getProduct() {
      try {
        setProduct({
          dataProduct: {},
          isLoadingProduct: true,
        })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[:d+=+at(document.id,+"${id}")+]]`,
          {
            signal: controller.signal,
          }
        )
        const dataProduct = await response.json()
        setProduct({ dataProduct, isLoadingProduct: false })
      } catch (err) {
        setProduct({
          dataProduct: {},
          isLoadingProduct: false,
        })
        console.error(err)
      }
    }

    getProduct()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, id])

  return product
}
