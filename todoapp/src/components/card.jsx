import ImgCopiar from "./image.png"

function Card({text,remover}){

    async function copiar(){
        await navigator.clipboard.writeText(text)
    }

    return(
        <>
        <div className="itempc">
            <div className="card" onClick={remover}>
                <p>{text}</p>
            </div>

            <img 
            className="imagemCopiar" 
            src={ImgCopiar} 
            alt="Copiar Item" 
            onClick={copiar}></img>
        </div>
        </>
    )

}

export default Card