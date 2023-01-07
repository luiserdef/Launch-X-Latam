
function PokeStats(props){

let typesTxt= ""
if(props.pokeData.types){
    props.pokeData.types.forEach(el=>{
        typesTxt+=el.type.name
    })
}

let statsPoke= ''
if(props.pokeData.stats){
    statsPoke=props.pokeData.stats.map((slot,index)=>{
        return <p key={index}>{`${slot.stat.name}: ${slot.base_stat}`}</p>
    })
}


    return(
        <div className="info-poke">
            <div className="container-poke">
                <div className="poke-info">
                    <p className="title">Nombre:</p>
                    <p className="info-data">{props.pokeData.name}</p>
                </div>
                <div className="poke-info">
                    <p className="title">Tipos:</p>
                    <p className="info-data">{typesTxt}</p>
                </div>
                <div className="poke-info">
                    <p className="title">Estadisticas:</p>
                    <div className="stats info-data">
                        {statsPoke}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeStats