import React from 'react';
import './App.css';
import adriana from './images/adriana.jpg';


function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

     <h1 className="title red"> Mer D'Automne </h1>
     <br/>
     <img src="./images/ray.jpg" width="600px" alt=""></img>
     <br/>

      <img src={adriana} alt="merAutomne" width="600px"></img>




</div>
<iframe width="600px" height="315" src="https://www.youtube.com/embed/u_W6HTbcdv0" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen title="automne"></iframe>
    </div>
  );
}

export default App;
