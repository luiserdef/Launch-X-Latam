
function PokeImage(props){
    return(
        <div className="screen">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default PokeImage