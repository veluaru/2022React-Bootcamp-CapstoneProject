import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useSearchTerm(term, page) {
  const [isLoadingSearchTerm, setIsLoadingSearchTerm] = useState(true);
  const [dataSearchTerm, setSearchTerm] = useState({});
  const { ref: apiRef, isLoadingSearchTerm: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { }
    }

    const controller = new AbortController()

    async function getSearchTerm() {
      try {
        setIsLoadingSearchTerm(true)
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(
            '[[fulltext(document, "' + term + '")]]'
          )}&lang=en-us&pageSize=20&page=${page}`,
          {
            signal: controller.signal,
          })
        const responseJson = await response.json();
        setSearchTerm(responseJson)
        setIsLoadingSearchTerm(false)
      } catch (error) {
        console.error(error)
        setSearchTerm({})
        setIsLoadingSearchTerm(false)
      }
    }
    getSearchTerm()

    return () => {
      controller.abort();
    }
  }, [apiRef, isApiMetadataLoading, term, page]);

  return {
    dataSearchTerm,
    isLoadingSearchTerm,
  };
}
// export function useSearchTerm(term, page) {
//   const { ref: apiRef, isLoadingSearchTerm: isApiMetadataLoading } = useLatestAPI()
//   const [searchTerm, setSearchTerm] = useState(() => ({
//     dataSearchTerm: {},
//     isLoadingSearchTerm: true,
//   }))

//   useEffect(() => {
//     if (!apiRef || isApiMetadataLoading) {
//       return () => { }
//     }

//     const controller = new AbortController()

//     async function getSearchTerm() {
//       try {
//         setSearchTerm({
//           dataSearchTerm: {},
//           isLoadingSearchTerm: true,
//         })

//         const response = await fetch(
//           `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
//             '[[at(document.type, "product")]]'
//           )}&q=${encodeURIComponent(
//             '[[fulltext(document, "'+term+'")]]'
//           )}&lang=en-us&pageSize=20&page=${page}`,
//           {
//             signal: controller.signal,
//           }
//         )
//         const dataSearchTerm = await response.json()
//         setSearchTerm({ dataSearchTerm, isLoadingSearchTerm: false })
//       } catch (err) {
//         setSearchTerm({
//           dataSearchTerm: {},
//           isLoadingSearchTerm: false,
//         })
//         console.error(err)
//       }
//     }

//     getSearchTerm()

//     return () => {
//       controller.abort()
//     }
//   }, [apiRef, isApiMetadataLoading, term, page])

//   return searchTerm
// }
