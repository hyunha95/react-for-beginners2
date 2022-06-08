import { useState, useEffect } from "react";

function App() {
<<<<<<< HEAD
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
=======
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
>>>>>>> a5e427909500ff737f17b261d89ce83352edb63d
    </div>
  );
}

export default App;
