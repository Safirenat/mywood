import styles from "./Delivery-bar.module.scss";

export default function DeliveryBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.label}>АДРЕС ДОСТАВКИ</span>
        <span className={styles.city}>КАЗАНЬ</span>
      </div>
    </div>
  );
}
