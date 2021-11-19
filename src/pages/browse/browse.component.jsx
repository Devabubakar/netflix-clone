import React from 'react';
import Navigation from '../../components/navigation/navigation.component';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function Browse() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default Browse;
