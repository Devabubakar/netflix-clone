import React from 'react';
import { RowContainer, RowItem, RowHeader, RowSlider } from './row.style';
import useFetch from '../../hooks/useFetch';

const Row = ({ url, heading }) => {
  const { data } = useFetch(url);

  const handleClick = async (id) => {
    console.log(`${id} clicked`);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2e482009e9d3239d3067b1e6289b0a3b&language=en-US`
    ).then((res) => res.json());
    console.log(response);
  };

  return (
    <RowContainer>
      <RowHeader>{heading}</RowHeader>
      <RowSlider>
        {data?.results.map((movie, index) => (
          <RowItem
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt='test'
            key={movie.id}
            onClick={() => handleClick(movie.id)}
          />
        ))}
      </RowSlider>
    </RowContainer>
  );
};

export default React.memo(Row);
