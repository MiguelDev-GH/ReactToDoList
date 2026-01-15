import { useState } from "react"
import Card from "./components/card"
import Header from "./components/header"

function App(){

  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState([])

  function adicionarItem(){
    if(texto.trim() !== ""){

      const novoItem = {
        id:Date.now(),
        conteudo:texto
      }

      setLista([...lista, novoItem])
      setTexto("")
    }
  }

  function removerItem(e, ind) {

    const card = e.currentTarget.closest('.itempc'); 
    if (card) card.classList.add('cardSumirCard');

    setTimeout(() => {
      setLista(listaAtual => listaAtual.filter((item) => item.id !== ind));
    }, 500);


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
          text={item.conteudo} 
          remover={(e)=>{removerItem(e,item.id)}} />
        ))}

      </div>

      </main>

    </>
  )
}

export default App