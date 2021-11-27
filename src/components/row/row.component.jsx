import React, { useState } from 'react';
import { RowContainer, RowItem, RowHeader, RowSlider } from './row.style';
import useFetch from '../../hooks/useFetch';

import ModalContainer from '../modal/modal.component';

const Row = ({ url, heading }) => {
  const { data } = useFetch(url);
  const [modalOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    setIsOpen(true);
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <RowContainer>
      <RowHeader>{heading}</RowHeader>
      <RowSlider>
        {data?.results.map((movie, index) => (
          <div>
            <RowItem
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt='test'
              key={movie.id}
              onClick={() => handleClick(index)}
            />
            <ModalContainer
              isOpen={modalOpen}
              closeModal={closeModal}
              movie={movie}
              clicked={clicked}
              key={index}
            />
          </div>
        ))}
      </RowSlider>
    </RowContainer>
  );
};

export default React.memo(Row);
