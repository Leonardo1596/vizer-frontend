const API_KEY = '6195b5693c9e04db18d5a30066d6835f';


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-`,
    fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1`,
    fetchSeries: `/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`,
    fetchMovies: `/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`,
    fetchMovies2: `/movie/popular?api_key=${API_KEY}&language=pt-BR&page=2`,
    fetchSearchMovies: `/search/movie?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false&query=`,
    fetchVideo: `/movie/297762?api_key=${API_KEY}&append_to_response=videos`,
    API_KEY: '6195b5693c9e04db18d5a30066d6835f'
}


export default requests;