import { decodeHtml } from '../utils';

export type ProductData = {
  name: string;
  price: number;
  available: boolean;
  inventoryLevel: number;
  image: string;
  url: string;
};

type ProductProps = {
  name: string;
  price: number;
  available: boolean;
  inventoryLevel: number;
  image: string;
  url: string;
};
export const Product = ({
  name,
  price,
  available,
  inventoryLevel,
  image,
  url,
}: ProductProps) => {
  return (
    <div
      className='group relative'
      onClick={() => {
        window.open(url, '_blank', 'rel=noopener noreferrer');
      }}
    >
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition duration-500 ease-in-out group-hover:opacity-75 lg:h-80'>
        <img
          src={image}
          alt={name}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex flex-col justify-between'>
        <div className='flex justify-between px-4'>
          <h3 className='text-sm text-gray-700'>
            <a href='#'>
              <span aria-hidden='true' className='absolute inset-0'></span>
              {decodeHtml(name)}
            </a>
          </h3>
          <p className='text-sm font-medium text-gray-900'>${price}</p>
        </div>
        <p className='mt-1 text-sm text-left text-gray-500'>
          {available ? 'In stock' : 'Out of stock'}
        </p>
        <p className='mt-1 text-sm text-left text-gray-500'>
          Stock: {inventoryLevel}
        </p>
      </div>
    </div>
  );
};
