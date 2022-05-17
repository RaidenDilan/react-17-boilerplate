import axios from 'axios';

import { MOVIE_DB_BASE_URL, MOVIE_DB_API_KEY } from '../constants';
import { Movies } from '../types/Movies';

export class MovieService {
  static getGenres = async (): Promise<Movies> => {
    const url = `${ MOVIE_DB_BASE_URL }/genre/movie/list?api_key=${ MOVIE_DB_API_KEY }`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      throw e.response;
    }
  }

  static getPopularMovies = async (page = 1): Promise<Movies> => {
    const url = `${ MOVIE_DB_BASE_URL }/movie/popular?api_key=${ MOVIE_DB_API_KEY }&page=${ page }`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      throw e.response;
    }
  }

  static getMovie = async (id: number): Promise<Movies> => {
    const url = `${ MOVIE_DB_BASE_URL }/movie/${ id }?api_key=${ MOVIE_DB_API_KEY }&append_to_response=recommendations`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      throw e.response;
    }
  }

  static searchMovies = async (query: string): Promise<Movies> => {
    const url = `${ MOVIE_DB_BASE_URL }/search/movie?api_key=${ MOVIE_DB_API_KEY }&query=${ query }`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      throw e.response;
    }
  }
}
