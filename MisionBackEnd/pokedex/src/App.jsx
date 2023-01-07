import { useState, useEffect } from 'react'
import PokeImage from './components/PokeImage'
import PokeInput from './components/PokeInput'
import PokeStats from './components/PokeStats'
import './App.scss'

function App() {

  const [pokeData, setPokeData] = useState({})
  const [pokeInput, setPokeInput] = useState('pikachu')
  const [newPoke, setNewPoke] = useState(false)
  

  useEffect(()=>{
    async function pokeData(inputValue){
      const url=`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
      try{    
        const urlResponse = await fetch(url)
        const dataParse = await urlResponse.json()      
        return dataParse
      }catch(e){

      }
    }
    pokeData(pokeInput)
    .then(res=>{
      if(res){
        setPokeData({
          img:res.sprites.front_default,
          name:res.name,
          types:res.types,
          stats:res.stats,
        })
      }else{
        setPokeData({
          img:'https://dapper-jelly-564587.netlify.app/misionfrontend/4-javascript/assets/questionm.webp',
        })
      }
    })
  
  },[newPoke])


  return (
    <div className="App">
        <PokeImage
          img={pokeData.img}
        ></PokeImage>
        <PokeStats pokeData={pokeData}></PokeStats>
        <PokeInput
        setPokeInput={setPokeInput}
        ></PokeInput>
        <div className="button-container">
          <button onClick={()=>setNewPoke(last=>!last)}></button>
        </div>
    </div>  
  )
}

export default App
