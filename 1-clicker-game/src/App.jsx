import { useEffect, useState } from 'react'
import './App.css'
import styles from './styles.module.css';

function App() {
  const [count, setCount] = useState(0);
  const [damage, setDamage] = useState(0);

  useEffect(() => {
    if (damage > 5) {
      setDamage(0);
      setCount(count + 1);
    }
  }, [damage]);

  return (
    <>
      <div className={styles.coins}>
        <img className={styles.coins_img} src="../src/assets/coin.png" alt="Coin Image" />
        <span className={styles.coins_number}>{count}</span>
      </div>
      <button onClick={() => setDamage(damage + 1)} className={styles.gameButton}>
        <img className={styles.gameButton_img} src="../src/assets/zombie_base.png" alt="Zombie Img" />
      </button>
      <div className={styles.lifeBar}>
        <div className={styles.life} style={{ width: (100 - (20 * damage)) + '%' }}></div>
      </div>
    </>
  )
}

export default App
