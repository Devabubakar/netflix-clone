import React from 'react';
import Trailer from '../../components/trailer/trailer.component';
import { useParams } from 'react-router-dom';
import { Wrapper } from './watch.style';
import Navigation from '../../components/navigation/navigation.component';

const Watch = () => {
  const params = useParams();
  return (
    <Wrapper>
      <Navigation />
      <Trailer id={params.id} />;
    </Wrapper>
  );
};

export default Watch;
