import React from 'react';
import { RowContainer, RowItem, RowHeader, RowSlider } from './row.style';
import useFetch from '../../hooks/useFetch';

const Row = ({ url, heading }) => {
  const { data } = useFetch(url);

  return (
    <RowContainer>
      <RowHeader>{heading}</RowHeader>
      <RowSlider>
        {data?.results.map((movie, index) => (
          <RowItem
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt='test'
            key={movie.id}
          />
        ))}
      </RowSlider>
    </RowContainer>
  );
};

export default React.memo(Row);
