import React from 'react';
import { RowContainer, RowItem, RowHeader, RowSlider } from './row.style';
import useFetch from '../../hooks/useFetch';

const Row = ({ url, heading }) => {
  const { data, isLoading, error } = useFetch(url);
  if (error) return <div>Error...</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <RowContainer>
      <RowHeader>{heading}</RowHeader>
      <RowSlider>
        {data.results.map((movie, index) => (
          <RowItem
            src={`http://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt='test'
            key={index}
          />
        ))}
      </RowSlider>
    </RowContainer>
  );
};

export default Row;
