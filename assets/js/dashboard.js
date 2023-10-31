function calcularEstatisticas() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const pendentes = tarefas.filter(t => t.concluida == false)
    const qtdePendente = pendentes.length
    document.querySelector("#qtde-pendente").innerHTML = qtdePendente

    const concluida = tarefas.filter(t => t.concluida == true)
    const qtdeConcluida = concluida.length
    document.querySelector("#qtde-concluida").innerHTML = qtdeConcluida

    
    const totalPontos = tarefas.reduce((total,t) => total += +t.pontos, 0)
    document.querySelector("#total-pontos").innerHTML = qtdeConcluida + qtdePendente

    

    const meuPontos = tarefas.reduce((total,t) => total += +t.preco, 0)
    document.querySelector("#meus-pontos").innerHTML = meuPontos
}

calcularEstatisticas()