import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [person, setPerson] = useState({});
  const firstNameEl = useRef(null);
  const lastNameEl = useRef(null);
  const ageEl = useRef(null);
  const cityEl = useRef(null);

  function handleOnKeyup() {
    const personObj = {
      firstName: firstNameEl.current.value,
      lastName: lastNameEl.current.value,
      ageEl: ageEl.current.value,
      cityEl: cityEl.current.value
    }

    setPerson(personObj);
  }

  return (
    <div className="App">
      <input type="text" placeholder="Förnamn" ref={ firstNameEl } onKeyUp={ handleOnKeyup } />
      <input type="text" placeholder="Efternamn" ref={ lastNameEl } onKeyUp={ handleOnKeyup } />
      <input type="text" placeholder="Ålder" ref={ ageEl } onKeyUp={ handleOnKeyup } />
      <input type="text" placeholder="Stad" ref={ cityEl } onKeyUp={ handleOnKeyup } />
    </div>
  );
}

export default App;
