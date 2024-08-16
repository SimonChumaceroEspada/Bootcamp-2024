import styles from './Checkout.module.css';

interface ProductProps {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: string;
  onAdd: () => void;
  onRemove: () => void;
}

const Product = ({ id, name, availableCount, price, orderedQuantity, total, onAdd, onRemove }: ProductProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button className={styles.actionButton} onClick={onAdd} disabled={orderedQuantity >= availableCount}>+</button>
        <button className={styles.actionButton} onClick={onRemove} disabled={orderedQuantity <= 0}>-</button>
      </td>
    </tr>
  );
};

export default Product;