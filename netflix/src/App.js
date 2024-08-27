import logo from './logo.svg';
import {trending,action, originals} from './Components/contants'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/banner';
import RowPost from './Components/rowPost/rowPost';
import { useEffect } from 'react';
function App() {
useEffect(()=>{
  console.log(trending,'trending');
})
  
  return (
    <div className="App">
       <NavBar  />
       <Banner/>
       <RowPost link= {originals} preview='large' />
       <RowPost link= {action} preview='medium' />
       <RowPost link= {trending} preview='small' />
       

    </div>
  );
}

export default App;
