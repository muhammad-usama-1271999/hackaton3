import React, { ChangeEvent } from 'react';

// Type definition for SearchBarProps
type SearchBarProps = {
  products: { id: number; name: string }[]; // Example structure for products, you can modify it
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const SearchableProductList: React.FC<SearchBarProps> = ({ handleSearch, searchQuery, products }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Products..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar flex gap-2 justify-between px-[50px] w-[236px] h-[40px] border py-2 text-gray-500" 
      />
      <div>
        {products
          .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(product => (
            <div key={product.id}>
              <span>{product.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SearchableProductList;