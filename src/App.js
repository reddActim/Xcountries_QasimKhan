import logo from './logo.svg';
import './App.css';
import ShowCards from './ShowCards';
import { useEffect, useState } from 'react';

function App() {
const [data , setData] = useState([]);

useEffect(()=>{
  fetch("https://xcountries-backend.labs.crio.do/all").then((fetchData) => fetchData.json())
  .then((finalData)=>{
    console.log(typeof finalData);
    setData(finalData);
  }).catch((error)=>{
    console.error(error);
  })
}, []);

  return (
    <ShowCards data = {data}/>
  );
}

export default App;
