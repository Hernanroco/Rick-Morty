import style from './App.module.css';
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import { useState } from 'react';


function App() {
  const [characters, setCharacters] = useState([{}]);

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });
}
  return (
    <div className='App'>
      <div className={style.nav}>
        <Nav onSearch={onSearch.SearchBar}/>
      </div>
      <div>
        <Cards characters={characters}/>
      </div>
      
    </div>
  );
}

export default App;
