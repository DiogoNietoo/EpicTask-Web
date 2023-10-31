function concluir(id){
    // buscar do localStorage 
    const tarefas = JSON.parse(localStorage.getItem("tarefas"))|| []

    // buscar a tarefa com o id 
    let tarefa = tarefas.find(t => t.id === id)


    // Alterar o estado da tarefa 
    tarefa.concluida = true

    // salvar no local 
    localStorage.setItem("tarefas",JSON.stringify(tarefas))

    atualizar()
    calcularEstatisticas()
}