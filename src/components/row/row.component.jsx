import React from 'react';
import { RowContainer, RowItem, RowHeader, RowSlider } from './row.style';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Row = ({ url, heading }) => {
  const { data } = useFetch(url);

  return (
    <RowContainer>
      <RowHeader>{heading}</RowHeader>
      <RowSlider>
        {data?.results.map((movie, index) => (
          <Link to={`/trailers/${movie.id}`} key={movie.id}>
            <RowItem
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt='test'
              key={movie.id}
            />
          </Link>
        ))}
      </RowSlider>
    </RowContainer>
  );
};

export default React.memo(Row);
