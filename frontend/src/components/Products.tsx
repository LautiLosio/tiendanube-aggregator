import { useEffect, useState } from 'react';
import { Product, ProductData } from './Product';
import { InfiniteScroll } from './InfiniteScroll';

const fetchProducts = async (limit: number, offset: number, search = '') => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?limit=${limit}&offset=${offset}&search=${search}`
    );
    if (!response.ok) throw new Error('Network response was not ok');

    return response.json();
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

export const Products = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [limit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(limit, offset, search);
      if (!data) return;

      setProducts(data);
    };
    loadProducts();
  }, []);

  const fetchMoreData = async () => {
    const newOffset = offset + limit;
    const data = await fetchProducts(limit, newOffset, search);
    if (!data) return;

    setProducts([...products, ...data]);
    setOffset(newOffset);
  };

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(limit, offset, search);
      if (!data) return;

      setProducts(data);
    };
    loadProducts();
  }, [search]);

  return (
    <div>
      <div className='bg-white rounded-md'>
        <div className='p-4'>
          <input
            type='text'
            placeholder='Search products...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='border border-gray-300 rounded-md px-3 py-2 w-full'
          />
        </div>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-[800px]'>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product) => (
              <Product
                key={product.url}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                url={product.url}
              />
            ))}
            {products.length === 0 && (
              <div className='text-center text-gray-500'>No products found</div>
            )}
          </div>
        </div>
        <InfiniteScroll fetchMoreData={fetchMoreData} />
      </div>
    </div>
  );
};