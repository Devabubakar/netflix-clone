import React from 'react';

import Footer from '../../components/footer/footer.component';
const Banner = React.lazy(() =>
  import('../../components/banner/banner.component')
);
const Row = React.lazy(() => import('../../components/row/row.component'));

function Browse() {
  return (
    <>
      <Banner />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`}
        heading='Horror Movies'
      />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`}
        heading='Action Packed'
      />
      <Row
        url={`
        https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`}
        heading='Adventure'
      />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=53`}
        heading='Thriller'
      />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`}
        heading='Comedy'
      />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`}
        heading='Animation'
      />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`}
        heading='War'
      />{' '}
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18&adult=false`}
        heading='Drama'
      />
      <Row
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878&adult=false
    `}
        heading='Sciency Fiction'
      />
      <Footer />
    </>
  );
}

export default React.memo(Browse);
