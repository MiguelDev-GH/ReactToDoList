import ImgCopiar from "./image.png"
import {TextAlignEnd} from "lucide-react"

function Card({hora,text,remover}){

    async function copiar(){
        await navigator.clipboard.writeText(text)
    }

    return(
        <>
        <div className="itempc">

            <h1 className="numeracaoCard">{hora}</h1>
            <div>
                <div className="card" onClick={remover}>
                    <p className="cardTexto">{text}</p>
                    <TextAlignEnd size={25} className="TextAlignEnd"/>
                </div>

                <img 
            className="imagemCopiar" 
            src={ImgCopiar} 
            alt="Copiar Item" 
            onClick={copiar}></img>
            </div>

            
        </div>
        </>
    )

}

export default Card