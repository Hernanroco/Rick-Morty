import style from './App.module.css';
import SearchBar from "./components/SearchBar/SearchBar.jsx";


import Cards from "./components/Cards/Cards.jsx";
import characters from './data';



function App() {
  return (
    <div className='App'>
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
      </div>
      <hr></hr>
      <div>
        <Cards characters={characters}/>
      </div>
      
    </div>
  );
}

export default App;
