import React, { useState, useEffect } from "react";
import { useProducts } from "./useProducts";
import Product from "./Product";
import { LoadingIcon } from "./Icons";
import styles from "./Checkout.module.css";

// You are provided with an incomplete <Checkout /> component. /ok
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs. /ok

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Checkout = () => {
  const { products, loading, handleAdd, handleRemove } = useProducts();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = products.reduce(
      (acc, product) => acc + product.orderedQuantity * product.price,
      0
    );
    setTotal(newTotal > 1000 ? newTotal * 0.9 : newTotal);
  }, [products]);

  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {loading ? (
          <LoadingIcon />
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Available</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <Product
                  key={product.id}
                  {...product}
                  total={(product.orderedQuantity * product.price).toFixed(2)}
                  onAdd={() => handleAdd(product.id)}
                  onRemove={() => handleRemove(product.id)}
                />
              ))}
            </tbody>
          </table>
        )}
        <h2>Order summary</h2>
        <p>Total: ${total.toFixed(2)}</p>
        {total > 1000 && <p>Discount applied: 10%</p>}
      </main>
    </div>
  );
};

export default Checkout;
