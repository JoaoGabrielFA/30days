import styles from './Coins.module.css';

function Coins({coins}) {
  return (
    <div className={styles.coins}>
      <img className={styles.coins_img} src="../src/assets/coin.png" alt="Coin Image" />
      <span className={styles.coins_number}>{coins}</span>
    </div>
  )
}

export default Coins;