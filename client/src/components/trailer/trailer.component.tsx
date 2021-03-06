import React from 'react';
import {
  TrailerContainer,
  TrailerIframe,
  TrailerError,
  TrailerErrorHeader,
} from './trailer.style';

import ErrorImage from '../../assets/404.jpg';

import useFetch from '../../hooks/useFetch';
import Loader from '../loader/loader.component';
import { CustomType } from '../row/row.component';

const Trailer = ({ id }: { id: string | undefined }) => {
  const { data, isLoading } = useFetch<CustomType>(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US?type=Trailer`
  );
  if (isLoading) return <Loader />;

  return (
    <TrailerContainer>
      {/* first item is usually a trailer interview */}
      {data?.results.length !== 0 && data !== null ? (
        <TrailerIframe
          height='320'
          width='100%'
          src={`https://www.youtube.com/embed/${data.results[0].key}`}
          frameBorder='0'
          allow='autoplay'
          allowFullScreen
          loading='lazy'
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
  );
};

export default React.memo(Trailer);
