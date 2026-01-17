import { useState } from "react"
import Card from "./components/card"
import Header from "./components/header"
import { Plus, MoveRight } from 'lucide-react'

let idProxItem = 0;

function App(){

  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState([])

  function adicionarItem(){
    if(texto.trim() !== ""){

      const horas = new Date().getHours()
      const minutos = new Date().getMinutes()

      const agora = `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}`

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

  function escrita(e) {
    e.target.style.height = "40px";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTexto(e.target.value)
  }

  return (
    <>
    
      <Header />

      <main>

      <h1>Meu App ToDo</h1>

      <div className="campoSalvar">

        <MoveRight size={25}/>

        <textarea 
        placeholder="O que quero fazer?" 
        onChange={escrita}></textarea>
        <button onClick={()=>{adicionarItem()}}><Plus size={20}/></button>
        
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