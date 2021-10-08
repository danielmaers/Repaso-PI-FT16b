import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacters } from '../redux/actions'

export default function Home() {
  let dispatch = useDispatch()
  let characters = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(getCharacters({}))
  }, [dispatch])

  console.log('CHARACTERS', characters)

  return (
    <div>
      {characters.result &&
        characters.result.map((e) => {
          return (
            <div key={e.id}>
              <img src={e.image} alt={e.name} />
              <p>{e.name}</p>
            </div>
          )
        })}
      <Link to='/characters/create'><button>Create</button></Link>
    </div>
  )
}
