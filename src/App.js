import imgRickMorty from './components/img/rick-morty.png';
import './App.css';
import { useState } from "react";
import Characters from './components/characters';

function App() {
  const [characters, setcharacters ] = useState(null);

  const resApi = async () => {
    const api = await fetch( "https://rickandmortyapi.com/api/character",);
    const characterApi = await api.json();

    setcharacters(characterApi.results);
  
   
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'>Rick & Morty</h1>
      {characters ? (
           <Characters characters={characters} setcharacters={setcharacters}  />
      ) : (
        <>
        <img src= {imgRickMorty} alt="Rick & Morty" className='img-home'/>
      <button onClick={resApi} className='btn-search'>Buscar Personajes</button>
   
    </>
         )}
      </header>
    </div>
  );
}

export default App;
