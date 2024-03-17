import styles from './Header.module.css'
const Headers = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.header}>
          <div className={styles.heading}>Welcome to S3P3R_Super_Supper</div>
        <div className={styles.cart}>Cart</div>
      </div>
      <div className={styles.welcomeImg}>
        <img id={styles.welcomeImg} src="https://wallpapers.com/images/high/food-4k-spdnpz7bhmx4kv2r.webp" alt="" />
      </div>
    </div>
  )
}
export default Headers