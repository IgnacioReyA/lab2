import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { Card } from './components/Card'
import { Loading } from './components/Loading'

function App() {
  const [limit, setLimit] = useState(10)
  const { data, isLoading, hasError } = useFetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)

  const loadMoreCats = () => {
    setLimit(prev => prev + 10)
  }

  const resetCats = () => {
    setLimit(10)
  }

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>🐱 The Cat API Gallery</h1>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={loadMoreCats} style={{ marginRight: '10px' }}>
            Load More Cats
          </button>
          <button onClick={resetCats}>
            Reset
          </button>
        </div>

        {hasError && (
          <div style={{ color: 'red', padding: '10px', backgroundColor: '#fee', borderRadius: '4px', marginBottom: '20px' }}>
            Error: {hasError}
          </div>
        )}

        {isLoading ? (
          <Loading />
        ) : (
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
      </div>
    </>
  )
}

export default App
