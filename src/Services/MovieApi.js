import axios from "axios";

// '?api=filmes'

const MovieApi = axios.create({
    baseURL: 'https://www.sujeitoprogramador.com/r-api/'
})

export default MovieApi;