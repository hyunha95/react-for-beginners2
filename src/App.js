import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setMoney(event.target.value);
  }
  const calculate = (event) => {
    console.log(event);
    setValue(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <label htmlFor="money">how much you want</label>
        <input type="number" id="money" value={money} placeholder="money" onChange={onChange}/>
      </div>
      <div>
        <label htmlFor="change">value</label>
        <input type="number" value={Number(money / value)} placeholder="value"/>
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={calculate} value={value}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} >
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
