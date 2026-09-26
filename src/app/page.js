'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = searchQuery 
          ? `https://dummyjson.com/products/search?q=${searchQuery}`
          : 'https://dummyjson.com/products';
          
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        )}
        
        {error && !loading && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">We couldn't find anything matching "{searchQuery}".</p>
          </div>
        )}
        
        {!loading && !error && products.length > 0 && (
          <ProductList products={products} />
        )}
      </main>
    </>
  );
}
