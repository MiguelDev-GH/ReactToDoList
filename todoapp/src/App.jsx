import { useState } from "react"
import Card from "./components/card"
import Header from "./components/header"

let idProxItem = 0;

function App(){

  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState([])

  function adicionarItem(){
    if(texto.trim() !== ""){

      const agora = `${new Date().getHours()}:${new Date().getMinutes()}`

      const novoItem = {
        id:idProxItem,
        hora:agora,
        conteudo:texto
      }
      setLista([...lista, novoItem])
      idProxItem++
    }
  }

  function removerItem(e, ind) {
    setLista(listaAtual => listaAtual.filter((item) => item.id !== ind));
  }

  return (
    <>
    
      <Header />

      <main>

      <h1>Meu App ToDo</h1>

      <div className="campoSalvar">

        <input 
        placeholder="O que quero fazer?" 
        onChange={(e)=>{setTexto(e.target.value)}}></input>
        <button onClick={()=>{adicionarItem()}}> Adicionar </button>
        
      </div>

      <div className="cards">

        {lista.map((item)=>(
          <Card 
          key={item.id} 
          hora={item.hora}
          text={item.conteudo} 
          remover={(e)=>{removerItem(e,item.id)}} />
        ))}

      </div>

      </main>

    </>
  )
}

export default App