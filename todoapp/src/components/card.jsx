import ImgCopiar from "./image.png"

function Card({id,text,remover}){

    async function copiar(){
        await navigator.clipboard.writeText(text)
    }

    return(
        <>
        <div className="itempc">

            <h1 className="numeracaoCard">{id}</h1>

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