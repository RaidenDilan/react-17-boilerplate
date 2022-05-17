export const favicon = '/favicon.png';
export const DOMAIN = process.env.REACT_APP_SITE;
export const getReactEnv = () => process.env.REACT_APP_ENV;
export const isProduction = () => getReactEnv() === 'prod';
export const isLocalhost = () => window.location.href.indexOf('localhost') !== -1;
export const isStaging = () => getReactEnv() === 'staging';

export function getApiBaseUrl(): string {
  // const env = isProduction() ? 'prod' : (isStaging() ? 'staging' : 'testing');
  return `http://api.themoviedb.org/3`;
}

export const API_BASE_URL = getApiBaseUrl();

export const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
export const MOVIE_DB_BASE_URL = process.env.REACT_APP_MOVIE_DB_BASE_URL;
