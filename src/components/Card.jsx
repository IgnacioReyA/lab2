import React from 'react'

export const Card = ({id, url, width, height, breeds=[]}) => {
  return (
    <section style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#fff'
    }}>
      <img 
        src={url} 
        alt={`Cat ${id}`} 
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <div style={{ marginTop: '10px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>
          ID: {id}
        </p>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Dimensions: {width} x {height}
        </p>
        {breeds.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <strong>{breeds[0].name}</strong>
            <p style={{ fontSize: '14px' }}>{breeds[0].temperament}</p>
            <p style={{ fontSize: '12px' }}>Origin: {breeds[0].origin}</p>
          </div>
        )}
      </div>
    </section>
  )
}