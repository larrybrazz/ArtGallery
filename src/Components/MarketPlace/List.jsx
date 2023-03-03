import React, { useState } from 'react'
import SearchBar from './SearchBar';
import {dataList, categoryList, ratingList} from '../../Data/Data'
import ProductCard from './ProductCard';

const List = () => {
  const [loadMore , setLoadMore] = useState(4)
  const limit = 4
  const handleLoadMore = () => {
    setLoadMore(prev => prev + limit)
  }

  return (
    <div>
      <SearchBar />
      <div className="md:grid grid-cols-3 gap-4 pt-14">
        {dataList.slice(0,loadMore).map((prod) => (
          <ProductCard prod={prod} key={prod.id} />
        ))}
      </div>
      <div onClick={handleLoadMore} className="text-center my-8">
        <span className="border border-black p-2 rounded-xl">
          Load more{" "}
          <span className="px-4 py-3  rounded-full mr-4">
            <i className="fa fa-arrow-right"></i>
          </span>
        </span>
      </div>
    </div>
  );
}

export default List
