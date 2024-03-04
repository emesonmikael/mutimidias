
import './App.css';
import {ethers} from 'ethers';
//import {useLayoutEffect, useState} from 'react';
//import {useState} from 'react';
import { calcBNBPrice,calcBSTTPrice } from './bsttprice';

//const [priceEle,setEle] = useState("");


function App() {

 async function elePrice(){
  let bnbPrice = await calcBNBPrice() // query pancakeswap to get the price of BNB in USDT
  let bsttPrice = await calcBSTTPrice() // query pancakeswap to get the price of BSTT in BNB
  let bsttprice = bsttPrice * bnbPrice;
 
  
document.getElementById("bsttprice").innerHTML  = bsttprice.toFixed(10) ;
  }
  return (
    <div className="App">
      <header className="App-header">
       <p>oi</p>
       <input type="button" value="COMPRAR" onClick={evt => elePrice()} />
       <b id ="bsttprice">sdfs</b> 
      </header>
    </div>
  );
}

export default App;
