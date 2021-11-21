import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import Carousel from '../../components/banner/banner.component';
import Row from '../../components/row/row.component';

const queryClient = new QueryClient();
function Browse() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Carousel />
      </QueryClientProvider>
      <Row />
    </div>
  );
}

export default Browse;
