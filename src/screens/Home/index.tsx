import React, { useCallback, useEffect } from 'react';
import { MovieService } from '../../api/MovieService';

const Home = () => {
  const init = useCallback(async () => {
    try {
      const res = await MovieService.getPopularMovies();
      console.log('res', res);
      return res;
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return <div>Home</div>;
};

export default Home;
