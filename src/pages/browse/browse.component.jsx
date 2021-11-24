import React from 'react';

import Banner from '../../components/banner/banner.component';
import Footer from '../../components/footer/footer.component';
import Row from '../../components/row/row.component';

function Browse() {
  return (
    <div>
      <Banner />
      <Row
        url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
        heading='Popular Movies'
      />

      <Row
        url={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`}
        heading='Trending Now'
      />

      <Row
        url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
        heading='Top Rated Movies'
      />
      <Row
        url={`
        https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
        heading='Popular TV Shows'
      />
      <Row
        url={`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
        heading='Airing Today'
      />
      <Footer />
    </div>
  );
}

export default Browse;
