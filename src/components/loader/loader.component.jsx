import React from 'react';
import { LoaderSpinner, LoaderContainer } from './loader.style';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
