
function PokeInput(props){
    return(
        <div className="input-user">
                <input onChange={(e)=>props.setPokeInput(e.target.value)}type="text" />
        </div>
    )
}

export default PokeInput