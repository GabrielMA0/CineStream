const apiKey: string = '7b48c66c'
const api: string = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie`

export const searchMovies = async (text: string) => {
    try {
        const response = await fetch(`${api}&s=${text}&y=`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}