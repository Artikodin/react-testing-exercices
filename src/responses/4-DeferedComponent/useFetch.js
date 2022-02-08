import { useEffect, useState } from 'react'

const fetchData = (error = false) =>
  new Promise((resolve, reject) => {
    if (error) reject(new Error('fail'))
    setTimeout(() => resolve('data'), 1000)
  })

const useFetch = hasError => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData(hasError)
      .then(_data => setData(_data))
      .catch(_error => setError(_error.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}

export default useFetch
