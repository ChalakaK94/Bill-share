
import { useState } from 'react';
import './App.css';
import AddPeroples from './components/AddPeoples ';
import BillShare from './components/BillShare';
import PeoplesList from './components/PeoplesList';

function App() {

  const [peoples, setPeoples] = useState([])

  function onAddPeople(name){
    setPeoples(f=> [...f, {id:Date.now(), name, billDetails:[]}])
  }
  return (
    <div className="container">
      <AddPeroples onAddPeople={onAddPeople}/>
      <BillShare peoples={peoples} />
      <PeoplesList peoples={peoples}/>
    </div>
  );
}

export default App;
