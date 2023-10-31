const botoes = document.querySelectorAll(".btn-apagar")


function apagar(id){
    console.log("apagar tarefa", id)
    //buscar os dados do localStorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas"))|| []

    //Remover a Tarefa 
    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)
    
    //salvar o local storage 
    localStorage.setItem("tarefas",JSON.stringify(tarefas_filtradas))
    atualizar()
    calcularEstatisticas()
}