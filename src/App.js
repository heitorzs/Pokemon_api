import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './Components/PokemonCard';
import NavBar from './Components/NavBar';
/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(resp => setList(resp.data.results))
  },[]) 

  return (
    <>  
      <NavBar/>
      <PokemonCard/>

    </>
  );
}


export default App;