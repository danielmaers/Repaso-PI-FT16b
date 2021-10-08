import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes, postCharacter } from '../redux/actions'
import CharacterForm from './CharacterForm'

export default function CreateCharacter() {
  const dispatch = useDispatch()
  const allEpisodes = useSelector((state) => state.episodes)

  useEffect(() => {
    dispatch(getEpisodes())
  }, [dispatch])

  function handleChange(event, setstate) {
    setstate(event.target.value)
  }

  function handleSubmit(event, payload){
    event.preventDefault()
    dispatch(postCharacter(payload))
  }
  return (
    <div>
      <h1>FORMULARIO DE CREACION</h1>
      <CharacterForm allEpisodes={allEpisodes} handleChange={handleChange} />
    </div>
  )
}
