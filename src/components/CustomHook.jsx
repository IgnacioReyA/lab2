import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';
import { Loading } from './Loading';

export const CustomHook = () => {
    const { counter, decrement, increment, reset } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://api.thecatapi.com/v1/images/search?limit=${counter}`)

  return (
    <>
    <h1>🐱 Cat API with Counter</h1>
    
    {hasError && (
      <div style={{ color: 'red', padding: '10px', backgroundColor: '#fee', borderRadius: '4px', marginBottom: '20px' }}>
        Error: {hasError}
      </div>
    )}
    
    {isLoading ? <Loading/>
      : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {data?.map((cat) => (
            <Card 
              key={cat.id}
              id={cat.id}
              url={cat.url}
              width={cat.width}
              height={cat.height}
              breeds={cat.breeds}
            />
          ))}
        </div>
      )}
    
    <div style={{ marginTop: '20px' }}>
      <button className='btn btn-primary' onClick={decrement} disabled={counter <= 1}>Show Less</button>
      <button className='btn btn-primary' onClick={increment} style={{ marginLeft: '10px' }}>Show More</button>
      <button className='btn btn-primary' onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
    </>
  )
}