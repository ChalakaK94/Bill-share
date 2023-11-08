import { useState } from 'react';
import './App.css';
import AddPeroples from './components/AddPeoples ';
import BillShare from './components/BillShare';
import PeoplesList from './components/PeoplesList';
import BillDetails from './components/BillDetails';

function App() {
  const [people , setPeople] = useState([])

  const [selectedPerson, setSelectedPerson] = useState('')

  function onAddPeople(name){
    setPeople(f=> [...f, {id:Date.now(), name, billDetails:[]}])
  }

  function onBillPaid(billDetails){
    setPeople(p=> calculateBill(p, billDetails))
  }

  function onPersonSelected(person){
    console.log('person',person);
    setSelectedPerson(person)
  }

  function calculateBill(peoples, billDetails){
    const amount = Math.round(+billDetails.bill/ peoples.length);
    const peopleDetails = [];

    for(let person of peoples){
      const singlePerson = {...person};
      if(singlePerson.id === +billDetails.personId){
        peopleDetails.push(singlePerson)
        continue;
      }

      const billings = [];
      let found = false;

      if(singlePerson.billDetails.length){
          for(var billing of singlePerson.billDetails){
            if(billing.id === billDetails.personId){
              found =true;
              billings.push({ ...billing, ...{ price: billing.price + amount } });
            }else{
              billings.push(billing)
            }
          }
      }
      if(!found){
        billings.push({id:billDetails.personId, name: billDetails.name, price:+amount})
      }

      singlePerson['billDetails'] = billings;
      peopleDetails.push(singlePerson)
    }
    return peopleDetails;

  }
  return (
    <div className="container">
      <AddPeroples onAddPeople={onAddPeople}/>
      <BillShare people ={people } onBillPaid={onBillPaid} />
      <PeoplesList people ={people } onPersonSelected={onPersonSelected} />
      {selectedPerson && <BillDetails person={selectedPerson}/>}
    </div>
  );
}

export default App;
