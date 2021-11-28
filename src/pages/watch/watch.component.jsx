import React from 'react';
import Trailer from '../../components/trailer/trailer.component';
import { useParams } from 'react-router-dom';

const Watch = () => {
  const params = useParams();
  return <Trailer id={params.id} />;
};

export default Watch;
