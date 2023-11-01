window.addEventListener("load", atualizar) 

function atualizar(){
  document.querySelector("#lista-tarefas").innerHTML = ""
  let tarefas = JSON.parse (localStorage.getItem("tarefas")) || [] 

    tarefas.forEach(tarefa => criarCard(tarefa)) 

}

function criarCard(tarefa){
    const card = document.createElement("div")
    card.classList.add("col", "s12", "m6","l4")

    card.innerHTML = `
    <div class="card ${tarefa.concluida ? 'grey' : ''}">
             <div class="card-content">
               <span class="card-title">Receita: ${tarefa.titulo}</span>
               <p>Modo de Preparo: ${tarefa.descricao}</p>
               <span data-badge-caption="preco" class""badge blue white text">Pontos: ${tarefa.preco}</span>
               <span><br>Status:</span>
               <span>${tarefa.concluida ? 'Concluido' : ''} </span>
               <i class="material-icons">${tarefa.concluida ? 'check' : ''} </span>
             </div>
             <div class="card-action">
               <a href="#" class="btn red" onClick="apagar(${tarefa.id})">Remover
                 <i class="material-icons">delete</i>
               </a>
               <a href="#" class="btn green" onClick="concluir(${tarefa.id})">Aprovado
                 <i class="material-icons">check</i>
               </a>
             </div>
           </div>
    `

    document.querySelector("#lista-tarefas").appendChild(card)
    calcularEstatisticas()



    

}