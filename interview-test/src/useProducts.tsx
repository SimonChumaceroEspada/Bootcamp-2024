import { useState, useEffect } from 'react';
import { getProducts, Product } from './dataService';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleAdd = (id: number) => {
    setProducts(products.map(product =>
      product.id === id && product.orderedQuantity < product.availableCount
        ? { ...product, orderedQuantity: product.orderedQuantity + 1 }
        : product
    ));
  };

  const handleRemove = (id: number) => {
    setProducts(products.map(product =>
      product.id === id && product.orderedQuantity > 0
        ? { ...product, orderedQuantity: product.orderedQuantity - 1 }
        : product
    ));
  };

  return { products, loading, handleAdd, handleRemove };
};