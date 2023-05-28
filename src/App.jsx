import { useState , useEffect } from "react";
import axios from "axios";
import {format} from "date-fns"
import Navbar from './components/navbar/NavBar'
import { Table } from "./components/table/Table";
import { Modal } from "./components/modal/Modal";
import CurrencyInput from './components/currency/CurrencyInput';
import Coin from "./components/coins/coins";
import Chart from "./components/chart/Chart";
import Featured from "./components/featured/featured";
import Footer from "./components/footer/Footer";
import './App.css'




function App() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "Home",
      description: "This is the main page of the website",
      status: "live",
    },
    {
      page: "About Us",
      description: "This page has details about the company",
      status: "draft",
    },
    {
      page: "Pricing",
      description: "Prices for different subscriptions",
      status: "error",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };


 //***   Currency converter logic   ***/


  const API_Key = "bd0c6de325398b231dc4a0de8ffadb6c";
  const CURRENCY_API = `http://data.fixer.io/api/latest?access_key=${API_Key}`;
  


  const [currencyRates, setCurrencyRates] = useState({});
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState('TND');
  const [currencyTwo, setCurrencyTwo] = useState('EUR');

  useEffect(() => {
    axios.get(CURRENCY_API)
      .then((response) => {
        console.log("Data fetched from the API:", response.data);
        setCurrencyRates(response.data.rates);
      })
      .catch((error) => {
        console.log(error);
        setCurrencyRates(null)
      });
  }, []);

useEffect(()=> {
 
  currencyRates && handleAmountOneChange(1)


}, [currencyRates])
   
  const formatCurrency =(number)=> {
    return number.toFixed(2)
  }

  const handleAmountOneChange = (amountOne) => {
    setAmountOne(amountOne);
    setAmountTwo(formatCurrency ((amountOne * currencyRates[currencyTwo] ) / currencyRates[currencyOne] ));
  };

  const handleAmountTwoChange = (amountTwo) => {
    setAmountTwo(amountTwo);
    setAmountOne(formatCurrency ( (amountTwo * currencyRates[currencyOne] ) / currencyRates[currencyTwo] ));
  };

  const handleCurrencyOneChange = (currencyOne) => {
    setCurrencyOne(currencyOne);
    setAmountTwo(formatCurrency ( (amountOne * currencyRates[currencyTwo] )/ currencyRates[currencyOne] ) );
  };

  const handleCurrencyTwoChange = (currencyTwo) => {
    setCurrencyTwo(currencyTwo);
    setAmountOne(formatCurrency ((amountTwo * currencyRates[currencyOne]) / currencyRates[currencyTwo]));
  };

  if (!currencyRates) return <p>Something went wrong check your console for more infos !</p>
  if (currencyRates.length === 0) return <p>Loading Data ...</p>

 //***   Currency converter logic   ***/



 ///****  crypto logic *** */

 const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handlechange = (e) => {
    setSearch(e.target.value);
  };
  const filtredcoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

//// ***** crypto logic ****////

  return (

      <>
      <Navbar/>
      <section id="section1">
      <div className="App">
      <h1> Users Table</h1>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
    </section>

    <section id="section2" className="App">
    <p className="oneCurrencyText">1 {currencyOne} equals</p>
      <p className="rateText">{formatCurrency ((amountTwo/amountOne)) } {currencyTwo} </p>
      <p className='date'>{format( new Date(), "dd/MM/yyyy , h:mm" )}</p>
      <CurrencyInput
        amount={amountOne}
        currency={currencyOne}
        currencies={Object.keys(currencyRates)}
        onAmountChange={handleAmountOneChange}
        onCurrencyChange={handleCurrencyOneChange}
      />
      <CurrencyInput
        amount={amountTwo}
        currency={currencyTwo}
        currencies={Object.keys(currencyRates)}
        onAmountChange={handleAmountTwoChange}
        onCurrencyChange={handleCurrencyTwoChange}
      /> 
    </section>

    <section id="section3" >
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="coin-input"
            onChange={handlechange}
            value={search}
          />
        </form>
      </div>
      {filtredcoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbole={coin.symbole}
            volume={coin.total_volume}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
    </section>
    <section id="section4">
    <h1> Data </h1>
    <div className="charts">
        <Featured/>
        <Chart aspect={2/1} title="Last 6 months revenue chart"/>
      </div>
    </section>
    <Footer/>
      </>
    
  );
}

export default App;
