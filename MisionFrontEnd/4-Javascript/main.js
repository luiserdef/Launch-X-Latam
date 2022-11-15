const pokeScreen=document.querySelector(".screen")
const pokeNameDoc=document.querySelector(".poke-name")
const pokeTypeDoc=document.querySelector(".poke-type")
const pokeStatsDoc=document.querySelector(".poke-stats")
const pokeImageDoc=document.querySelector(".pokemon-image")
const pokeMovementsDoc=document.querySelector(".poke-moves")
const btAction=document.querySelector(".bt-action-poke")
const inputUser = document.querySelector(".input-user-poke")


btAction.addEventListener("click",renderPokemon)

async function pokemonData (inputValue) {
    const url=`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
    const response = await fetch (url)

    if(!response.ok || response.status==="404"){
        throw new Error("Error pokemon!")
    }
    const data = await response.json()
    return data
}

async function renderPokemon(){
    const inputValue = inputUser.value
    pokemonData(inputValue).then(data=>{
        const pokeImage=data.sprites.front_default
        pokeImageDoc.src=`${pokeImage}`
    
        pokeNameDoc.innerHTML = data.name
    
        let types=''
        const datatypes=data.types
        datatypes.forEach(slot=>{
            types+= ` ${slot.type.name}`
        })
        pokeTypeDoc.innerHTML = types;


        pokeStatsDoc.textContent =''
        data.stats.forEach(slot=>{
            const elm = document.createElement('p')
            elm.textContent = `${slot.stat.name}: ${slot.base_stat}`
            pokeStatsDoc.appendChild(elm)
        })

        pokeMovementsDoc.textContent =''
        data.moves.forEach(move=>{
            const elm = document.createElement('p')
            elm.textContent = `${move.move.name}`
            pokeMovementsDoc.appendChild(elm)
        })

    }).catch(error=>{
        pokeImageDoc.src=`assets/questionm.webp`
        pokeStatsDoc.textContent =''
        pokeStatsDoc.textContent =''
        pokeTypeDoc.textContent =''
        pokeNameDoc.textContent =''
        pokeMovementsDoc.textContent =''
        console.log(error)
    })


}
