import './App.css';
import { Router } from "@reach/router";
import ShowPet from './components/ShowPet';
import UpdatePet from './components/UpdatePet';
import PetList from './components/PetList';
import PetForm from './components/PetForm';


// Rendering components through Main.Js in the views folder and reach router
function App() {
  return (
    <div>
      <Router>
        <PetList path="/" />
        <PetForm path="/new-pet" />
        <ShowPet path="/pet/:_id" />
        <UpdatePet path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
