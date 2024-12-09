import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '@store/productsSlice';
import { Product } from '@store/types';
import axios from 'axios';
import SortDropdown from './SortDropDown';
import Pagination from './Pagination';
import ProductGrid from './ProductGrid';

interface ProductListProps {
  searchTerm: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: { products: { products: Product[] } }) => state.products.products);

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <SortDropdown sortOrder={sortOrder} onSortChange={order => setSortOrder(order)} />
      <ProductGrid products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductList;