import axios from './axios.service';

const MAIN_DOMAIN = `https://ophim1.com`;

const _segment = 'nYjySrV5Me-0ln0W9Efmg';

const URLs = {
  newUpdated: (page: number = 1) => `${MAIN_DOMAIN}/danh-sach/phim-moi-cap-nhat?page=${page}`,
  tvShows: () => `https://ophim.cc/_next/data/${_segment}/danh-sach/phim-bo.json?slug=phim-bo`,
  movies: () => `https://ophim.cc/_next/data/${_segment}/danh-sach/phim-le.json?slug=phim-le`,
  anime: () => `https://ophim.cc/_next/data/${_segment}/danh-sach/hoat-hinh.json?slug=hoat-hinh`,
  getFilm: (slug: string) => `https://ophim.cc/_next/data/${_segment}/phim/${slug}.json?slug=${slug}`,
};

const getNewUpdated = async (page: number = 1): Promise<any> => {
  try {
    return (await axios.get(URLs.newUpdated(page)));
  } catch (err) {
    throw err;
  }
};
const getTVShows = async (): Promise<any> => {
  try {
    return (await axios.get(URLs.tvShows()));
  } catch (err) {
    throw err;
  }
};
const getMovies = async (): Promise<any> => {
  try {
    return (await axios.get(URLs.movies()));
  } catch (err) {
    throw err;
  }
};
const getAnime = async (): Promise<any> => {
  try {
    return (await axios.get(URLs.anime()));
  } catch (err) {
    throw err;
  }
};

// Get a Film by slug
const getFilm = async (slug: string): Promise<any> => {
  try {
    return (await axios.get(URLs.getFilm(slug)));
  } catch (err) {
    throw err;
  }
};

export default { getNewUpdated, getTVShows, getMovies, getAnime, getFilm };