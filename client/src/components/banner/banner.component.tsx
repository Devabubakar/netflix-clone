import React from 'react';
import {
  BannerContainer,
  BannerContent,
  BannerHeader,
  BannerParagraph,
  BannerButton,
  BannerCta,
} from './banner.style';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import useFetch from '../../hooks/useFetch';
import Loader from '../loader/loader.component';

function Banner() {
  const { data, isLoading }: { data: any; isLoading: boolean } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
  );

  const truncateString = (string: string, limit: number) => {
    if (string.length > limit) {
      return string.substring(0, limit) + '...';
    } else {
      return string;
    }
  };

  const movie = data?.results[Math.floor(Math.random() * data?.results.length)];

  return isLoading ? (
    <Loader />
  ) : (
    <BannerContainer
      img={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}
`}
    >
      <BannerContent>
        <BannerHeader>
          {movie.title || movie.name || movie.original_title}
        </BannerHeader>
        <BannerParagraph>{truncateString(movie.overview, 250)}</BannerParagraph>
        <BannerCta>
          <BannerButton to={`/trailers/${movie.id}`}>
            <FaPlay /> Play
          </BannerButton>
          <BannerButton info='true' to={`/trailers/${movie.id}`}>
            <FaInfoCircle size={20} /> More Info
          </BannerButton>
        </BannerCta>
      </BannerContent>
    </BannerContainer>
  );
}

export default React.memo(Banner);
