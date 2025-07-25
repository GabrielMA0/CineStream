const apiKey = '7b48c66c'
const api = `http://www.omdbapi.com/?apikey=${apiKey}`

export const searchMovies = async (text: string) => {
    try {
        const resposta = await fetch('https://api.exemplo.com/dados')
        const json = await resposta.json()
        dados.value = json
    } catch (erro) {
        console.error('Erro na requisição:', erro)
    } finally {
        carregando.value = false
    }
}