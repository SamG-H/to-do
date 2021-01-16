import React, { useState, useEffect } from 'react'

export default function Spell() {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/spells/')
    .then(r => r.json())
    .then(data => {
      console.log(data);
      setSpells(data.results);
    }
  )}, [])
  return (
    <div>
      <h2>Spells</h2>
      {spells.map(spell => {
        return(
          <div key={spell.name}>
            <p className='spell'>{spell.name}</p>
          </div>
        )
      })}
    </div>
  )
}
