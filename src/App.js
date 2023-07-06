import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './Components/PokemonCard';
import NavBar from './Components/NavBar';
import { Container, Grid } from '@mui/material';
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
  // // const [list, setList] = useState([]);
const [dataPokemon, setDataPokemon] = useState([]);


  useEffect(()=>{
    getPokemonApi()
  },[]) 

  function getPokemonApi () {
    let endpoints = [];
    for( let i=1; i<151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then((res) => setDataPokemon(res))
  }

  return (
    <>  
      <NavBar/>  
      <Container maxWidth="false" margin-top="2rem">
        <Grid container spacing={3} marginTop={2}>
          {
            dataPokemon.map((pokemon, name)=>(  
              <Grid item xs={12} sm={6} md={4} lg={2} key={name} > 
                <PokemonCard 
                name={pokemon.data.name}
                exp={pokemon.data.base_experience}
                image={pokemon.data.sprites.front_default}
                ></PokemonCard>
              </Grid>
            ) )
          }


        </Grid>
      </Container>

    </>
  );
}


export default App;