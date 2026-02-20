import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';
import { Loading } from './Loading';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
    <h1>Fetch API de Pokemon</h1>
    <h2>Nombre: </h2>
    <h2>{data?.name}</h2>
        {isLoading ? <Loading/>
        : (<Card id={counter} name={data.name} sprites={ [
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
        ] } />)}
    <button className='btn btn-primary' onClick={decrement}>Anterior</button>
    <button className='btn btn-primary' onClick={increment}>Siguiente</button>
    <button className='btn btn-primary' onClick={() => counter(1)}>Reset</button> 
    </>
  )
}