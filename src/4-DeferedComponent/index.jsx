import useFetch from './useFetch'

const DeferedComponent = ({ hasError = false }) => {
  const { loading, error, data } = useFetch(hasError)

  if (loading) return <span>Loading ...</span>
  if (error) return <span>{error}</span>
  if (data) return <span>{data}</span>
}

export default DeferedComponent
