export const API__KEY = 'daf1a56c904ca6e2943af1246db74e3f'
export const MOVIELIST__URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API__KEY}&language=en-US&page=1`
export const TOP_RATED__URL =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API__KEY}&language=en-US&page=1`
export const UPCOMING__URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API__KEY}&language=en-US&page=1`
export const NOW_PLAYING__URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API__KEY}&language=en-US&page=1`
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
export const BACKGROUND_URL = 'https://image.tmdb.org/t/p/w1280'

export let DETAILS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API__KEY}&language=en-US`

