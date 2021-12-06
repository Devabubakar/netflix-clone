import React from 'react';
import Trailer from '../../components/trailer/trailer.component';
import { useParams } from 'react-router-dom';
import { Wrapper } from './watch.style';

import Footer from '../../components/footer/footer.component';

import Row from '../../components/row/row.component';

const Watch = () => {
  const params = useParams();
  return (
    <Wrapper>
     

      <Trailer id={params.id} />
      <Row
        url={`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
        heading='Similar Movies'
      />
      <Footer />
    </Wrapper>
  );
};

export default Watch;
