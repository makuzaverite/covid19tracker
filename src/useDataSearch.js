import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useDataSearch(query) {
  const [country, setCountry] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setCountry('')
  }, [query])

  useEffect(() => {
    setIsLoading(true)
    let cancel
    axios({
      method: 'GET',
      url: `https://covid19.mathdro.id/api/countries/${query}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        if (response.data.confirmed) {
          setCountry(response.data)
        }
        setIsLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        if (e.response.status === 404) setError(true)
      })

    return () => cancel()
  }, [query])

  return { country, isLoading, error }
}
