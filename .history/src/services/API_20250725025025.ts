const apiKey: string = '7b48c66c'
const api: string = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie`

export const searchMovies = async (text: string, year: number) => {
    try {
        const response = await fetch(`${api}&s=${text}&y=${year}`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}