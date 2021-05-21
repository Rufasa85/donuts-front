import React, {useState,useEffect} from "react"
import './App.css';
import API from "./API.js"

function App() {
  const [donuts,setDonuts] = useState([]);
useEffect(loadDonuts,[])

  function loadDonuts(){
    API.getAllDonuts().then(data=>{
      console.log(data);
      setDonuts(data);
    })
  }
  return (
    <div className="App">
      <h1>Donuts</h1>
      {donuts.map(donut=> <h3 key={donut._id}>{donut.name} {donut.price}</h3>)}
    </div>
  );
}

export default App;
