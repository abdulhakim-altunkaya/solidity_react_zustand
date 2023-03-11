import { useState } from "react";
import { useAccount } from "./Store.js";

function App() {

  const {ethereum} = window;

  let[account, setAccount] = useState("");

  const handleConnect = async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      setAccount(accounts[0]);
    } else {
      alert("install metamask");
    }
  }


  const myContract = useAccount(state => state.contract);
  let[city, setCity] = useState("");
  const getData = async () => {
    let data = await myContract.myCity();
    setCity(data);
  }




  return (
    <div className="App">
      <button onClick={handleConnect}>CONNECT METAMASK</button>
      <p>{account}</p>
      <button onClick={getData}>GET DATA FROM CONTRACT</button>
      <p>{city}</p>
    </div>
  );
}

export default App;
