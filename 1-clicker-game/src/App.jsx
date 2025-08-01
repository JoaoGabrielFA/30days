import './App.css'
import styles from './Styles.module.css';
import Card from './components/Card';
import Coins from './components/Coins';
import { useState } from 'react';

function App() {

  const [coins, setCoins] = useState(0);

  return (
    <>
      <Coins coins={coins} />
      <div className={styles.cards}>
        <Card zombie={1} life={5}  coins={coins} setCoins={setCoins} />
        <Card zombie={2} life={10} coins={coins} setCoins={setCoins} />
        <Card zombie={3} life={20} coins={coins} setCoins={setCoins} />
        <Card zombie={4} life={30} coins={coins} setCoins={setCoins} />
        <Card zombie={5} life={40} coins={coins} setCoins={setCoins} />
        <Card zombie={6} life={50} coins={coins} setCoins={setCoins} />
      </div>
    </>
  )
}

export default App
