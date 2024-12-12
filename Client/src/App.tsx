import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import ProductList from './Components/ProductList';


const queryClient = new QueryClient();

const App: React.FC = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <a href="/products">Products</a>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
