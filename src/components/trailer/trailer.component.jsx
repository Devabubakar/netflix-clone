import React from 'react';
import {
  TrailerContainer,
  TrailerIframe,
  TrailerWrapper,
  TrailerError,
  TrailerErrorHeader,
} from './trailer.style';

import ErrorImage from '../../assets/404.jpg';

import useFetch from '../../hooks/useFetch';
import Loader from '../loader/loader.component';
import { useParams } from 'react-router-dom';

const Trailer = () => {
  const params = useParams();
  const { data, isLoading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US?type=Trailer`
  );
  if (isLoading) return <Loader />;

  return (
    <TrailerWrapper>
      <TrailerContainer>
        {/* first item is usually a trailer interview */}
        {data?.results.length !== 0 && data !== null ? (
          <TrailerIframe
            height='320'
            width='100%'
            src={`https://www.youtube.com/embed/${data.results[0].key}`}
            frameBorder='0'
            allow='autoplay'
            modestBranding='1'
            allowFullScreen
          />
        ) : (
          <TrailerError>
            <img src={ErrorImage} alt='errorimage' />
            <TrailerErrorHeader>
              Trailer currently unavailable at this time . Check on it
              periodically , in the meantime explore similar movies below
            </TrailerErrorHeader>
          </TrailerError>
        )}
      </TrailerContainer>
    </TrailerWrapper>
  );
};

export default Trailer;
