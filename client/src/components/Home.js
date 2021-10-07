import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import { getCharacters } from "../redux/actions";


export default function Home(){
    let dispatch = useDispatch()
    let characters = useSelector(state=> state.characters)

    useEffect(()=>{
        dispatch(getCharacters({})) 
     },[dispatch])

console.log("CHARACTERS", characters)

    return (<div>
        <p>{characters[0]?.name}</p>
    </div>)
}