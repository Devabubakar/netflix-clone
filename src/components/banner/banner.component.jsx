import React, { useState, useEffect } from 'react';
import {
  BannerContainer,
  BannerContent,
  BannerHeader,
  BannerParagraph,
  BannerButton,
  BannerCta,
} from './banner.style';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import Navigation from '../navigation/navigation.component';

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetch('/browse');
      setMovies(moviesData.data.results);
    };
    fetchMovies();
  }, []);

  console.log(movies);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + '...';
    } else {
      return string;
    }
  }
  return movie ? (
    <BannerContainer
      img={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}
    `}
    >
      <Navigation />
      <BannerContent>
        <BannerHeader>
          {movie.title || movie.name || movie.original_title}
        </BannerHeader>
        <BannerParagraph>{truncateString(movie.overview, 250)}</BannerParagraph>
        <BannerCta>
          <BannerButton>
            <FaPlay /> Play
          </BannerButton>
          <BannerButton info>
            <FaInfoCircle size={20} /> More Info
          </BannerButton>
        </BannerCta>
      </BannerContent>
    </BannerContainer>
  ) : (
    <div>Loading ....</div>
  );
}

export default Banner;
