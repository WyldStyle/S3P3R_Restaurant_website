import styles from './Header.module.css'
import classes from './Header.module.css'
import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'

const Headers = ({onShowCart}) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <header className={styles.header}></header> */}
        <h1>ReactMeals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton onClick={onShowCart} ></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img id={styles.welcomeImg} src="https://wallpapers.com/images/high/food-4k-spdnpz7bhmx4kv2r.webp" alt="" />
      </div>
    </Fragment>
  )
}
export default Headers