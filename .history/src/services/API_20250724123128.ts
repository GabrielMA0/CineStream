const apiKey = '7b48c66c'
const api = `http://www.omdbapi.com/?apikey=${apiKey}`

export const searchMovies = async (text: string) => {
    try {
        const response = await fetch(`${api}&s=${text}`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}