import React from 'react';
import { RowContainer, RowItem, RowHeader, RowSlider } from './row.style';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
interface Props {
  url: string;
  heading: string;
}

export type CustomType = {
  results: any[];
};

const Row = ({ url, heading }: Props) => {
  const { data } = useFetch<CustomType>(url);

  return (
    <RowContainer>
      <RowHeader>{heading}</RowHeader>
      <RowSlider>
        {data?.results.map((movie, index) => (
          <Link to={`/trailers/${movie.id}`} key={index}>
            <RowItem
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              key={index}
            />
          </Link>
        ))}
      </RowSlider>
    </RowContainer>
  );
};

export default React.memo(Row);
