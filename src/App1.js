import {useLayoutEffect, useState} from 'react';
import { ethers } from 'ethers';
import { getTokenBalance, transferToken, getTransaction } from './MetaMaskService';
import { calcBSTTPrice,calcBNBPrice } from './bsttprice';

import './App.css';
//import web3 from 'web3';


function App() {

const [error, setError] = useState("");
//const [to , setTo] = useState("0xE6d7083A880b5D30170b5335D8Ac9e30Aa0fa8a2");
const [transaction, setTransaction] = useState("");
//const CONTRACT_ADDRESS = "0x983060ea9ae659045C130C17312065139a479442";

async function getContract(){
if (!window.ethereum) return setError('metamask nao conectada!');
//const web3 = new Web3(window.ethereum);
//if (!accounts || !accounts.length) return setError('wallet not found/allowed!');
}

async function checkTransaction() {
  const result = await getTransaction(transaction);

  setMessage(`
  Status: ${result.status}
  Confirmations: ${result.confirmations}`);
}
 //const [myAddress, setMyAddress] = useState("");
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState("0x3ea5502bA0d8BE6222EE0202Ea79F74eC6458793");
  //const [contract2, setContract2] = useState("0x983060ea9ae659045C130C17312065139a479442");
  const [balance, setBalance] = useState('');

  const [toAddress, setToAddress] = useState("0x8bCea3942295f3b847B49C190862781C4fC2EFe3");
  const [quantity, setQuantity] = useState("");
    const [quantity3, setQuantity3] = useState("");
   //const [quantity11, setQuantity11] = useState("");
  const [message, setMessage] = useState('');
    const [message3, setMessage3] = useState('');
    const [message2, setMessage2] = useState('');
    const [message4, setMessage4] = useState('');
    const [message5, setMessage5] = useState('');
    const [message6, setMessage6] = useState('');
let [quantity2, setQuantity2] = useState("");
//const [wallet, setWallet] = useState('');
const [carteirapag,setCarteirapag]=useState("")

const provider = new ethers.providers.Web3Provider(window.ethereum);


    
    checkBalance();


  async function checkBalance() {
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
    let balance;

      balance = await getTokenBalance( address,contract);
      let bnbPrice = await calcBNBPrice() // query pancakeswap to get the price of BNB in USDT
      let bsttPrice = await calcBSTTPrice() // query pancakeswap to get the price of BSTT in BNB
      let bsttprice = bsttPrice * bnbPrice;
      let valorDolar1 = 40; //valor em dolar do primeiro produto
      let valorProduto1 = valorDolar1/bsttprice;
      let valorDolar2 = 281; //valor em dolar do segundo produto
      let valorProduto2 = valorDolar2/bsttprice;
      let valorDolar3 = 826; //valor em dolar do terceiro produto
      let valorProduto3 = valorDolar3/bsttprice;


    setBalance(balance);
     setQuantity2(valorProduto1.toFixed());
     setQuantity(valorProduto2.toFixed());
     setQuantity3(valorProduto3.toFixed())
      setMessage6(bsttprice);
     console.log(quantity2);
    

  }

  async function transfer() {

    let result;
      if(balance < "1")
      alert("saldo insuficiente");
         // setMessage2('saldo insuficiente');
      if (balance )
      result = await transferToken(toAddress, contract, quantity);
    setMessage4(JSON.stringify(result.hash));

      setCarteirapag(JSON.stringify(result.from));

      //setMessage3('Compra efetuada com sucesso HASH:');
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScUKH1bnZ2MNCXcCXXE-ElpfLUjw7X5ZDvyJI11Fo175BeEnw/viewform?usp=sf_link", "_blank");



  }
 async function transfer2() {
    let result;
   
     if(balance < "1")
     alert("saldo insuficiente");
         //setMessage2('saldo insuficiente');
     if (balance )
     console.log(balance);
         result = await transferToken(toAddress, contract, quantity2);
	;
    setMessage5(JSON.stringify(result.hash));
     setCarteirapag(JSON.stringify(result.from));
    
     //setMessage3('Compra efetuada com sucesso HASH:');
      //result2 = await contract.methods.safeMint(to).send();
     window.open("https://docs.google.com/forms/d/e/1FAIpQLScUKH1bnZ2MNCXcCXXE-ElpfLUjw7X5ZDvyJI11Fo175BeEnw/viewform?usp=sf_link", "_blank");

 }
    async function transfer3() {
        let result;
        if(balance <"1")
        alert("saldo insuficiente");
           // setMessage2('saldo insuficiente');
        if (balance)

            result = await transferToken(toAddress, contract, quantity3);

        setMessage6(JSON.stringify(result.hash));
        setCarteirapag(JSON.stringify(result.from));
        //setMessage3('Compra efetuada com sucesso HASH:');
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScUKH1bnZ2MNCXcCXXE-ElpfLUjw7X5ZDvyJI11Fo175BeEnw/viewform?usp=sf_link", "_blank");

    }


  return (
  <div className="App">
<h1>ELETRO EXPRESSO</h1>
<header className="App-header">
  <p>
    PREÇO TOKEN ELE : {message6}
  </p>
    <div>

     	<p>
       <img src="https://i.ibb.co/9sb37JN/photo1708360668-removebg-preview.png" alt="photo1708360668-removebg-preview" border="0"/>

	</p>
        <p>
            TV BOX VENDOR 64GB

        </p>

<p>
        
      </p>
        <p>
            Custo em ELE: {quantity2} 
        </p>

            seu saldo : {balance}

        
<p>
       <input type="button" value="COMPRAR" onClick={evt => transfer2()} />
      </p>
        <p>
            {message3} {message5}
        </p>
     <hr />
     <p>

     <img src="https://i.ibb.co/8rYRjtj/IMG-9911-removebg-preview.png" alt="IMG-9911-removebg-preview" border="0"/>

</p>


 <p>
      POCO X5 256GB/8Ram 5G
      </p>
        <p>
            
        </p>
        <p>
        Custo em ELE:  {quantity}
        </p>
        <p>
            seu saldo : {balance} 
        </p>
      <p>
        <input type="button" value="COMPRAR" onClick={evt=> transfer()} />
      </p>
        <p>
            {message3} {message4}
        </p>
        <p>

        <img src="https://i.ibb.co/QXQmkYt/845265318-removebg-preview.png" alt="845265318-removebg-preview" border="0"/>

        </p>
        <p>
            IPhone 14 128GB Chip Fisico
        </p>
        <p>
           
        </p>
        <p>
        Custo em ELE: {quantity3}
        </p>
        <p>
            seu saldo : {balance} 
        </p>
        <p>
            <input type="button" value="COMPRAR" onClick={evt=> transfer3()} />
        </p>
        <p>
            {message3} {message}
        </p>

      <hr />

    </div >

     
      <p>
          SUA HASH {message}
      </p>
          <p>
               {carteirapag}
          </p>

</header>
    


</div >
  );

}


export default App;