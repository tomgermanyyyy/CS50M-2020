export const fetchMovies = async (movie) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=651291d4&s=${movie}`)
  const { Search } = await response.json()
  return Search

  // const { totalResults } = await response.json()
  // console.log(totalResults)

  // let result = []
  // const pageCount = (totalResults + 10 - 1) / 10
  // for (let i = 1; i <= pageCount; i++) {
  //   const response = await fetch(`http://www.omdbapi.com/?apikey=651291d4&s=${movie}&page=${i}`)
  //   const { Search } = await response.json()
  //   //console.log(Search)
  //   result = await [...result, ...Search]
  //   console.log(result)
  // }
  // return result
}