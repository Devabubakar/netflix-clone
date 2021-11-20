import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import Carousel from '../../components/banner/banner.component';

const queryClient = new QueryClient();
function Browse() {
  return (
    <div>
  
      <QueryClientProvider client={queryClient}>
        <Carousel />
      </QueryClientProvider>
    </div>
  );
}

export default Browse;
