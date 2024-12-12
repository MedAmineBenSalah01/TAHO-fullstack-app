import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../Utils/api';
import SearchInput from './SearchInput';

const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredProducts = data?.filter((product: any) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error instanceof Error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="product-list-container">
      <h1 className="heading">Product List</h1>
      <SearchInput searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <div className="product-grid">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product: any) => (
            <div className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
