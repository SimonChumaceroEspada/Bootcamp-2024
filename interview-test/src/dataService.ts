export type Product = {
  id: number;
  name: string;
  price: number;
  availableCount: number;
  orderedQuantity: number; 
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("/public/products.json");
  const data = await response.json();
  return data.products.map((product: Omit<Product, "orderedQuantity">) => ({
    ...product,
    orderedQuantity: 0, 
  }));
};

function getData(endpoint: string): Promise<{ products: Product[] }> {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve) => {
    setTimeout(function () {
      fetch(endpoint).then((res) => {
        resolve(res.json());
      });
    }, delay);
  });
}
