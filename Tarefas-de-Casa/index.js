let tarefaDiaria = []
let tarefa
let novaTarefa

function addTarefa() {
  tarefa = prompt("Digite a tarefa que deseja adicionar: ")
  tarefaDiaria.push(tarefa)
  alert ("Tarefa adicionada com sucesso!")
}
function delTarefa() {
  tarefa = prompt("Digite a tarefa que deseja remover: ")
  tarefaDiaria.splice(tarefaDiaria.indexOf(tarefa), 1)
  alert ("Tarefa removida com sucesso!")
}
function attTarefa() {
  tarefa = prompt("Digite a tarefa que deseja alterar: ")
  tarefaDiaria.splice(tarefaDiaria.indexOf(tarefa), 1)
  novaTarefa = prompt("Digite a tarefa que deseja inserir no lugar: ")
  tarefaDiaria.splice(tarefaDiaria.indexOf(tarefa), 0, novaTarefa)
  alert ("Tarefa atualizada com sucesso!")
}
function verTarefa() {
  alert (tarefaDiaria)
}

do {
  var resposta = parseInt(prompt("O que deseja fazer? \n[1] - Adicionar tarefa \n[2] - Remover tarefa \n[3] - Atualizar tarefa \n[4] - Ver tarefas\n[0] - Sair"))
  switch (resposta) {
    case 1:
      addTarefa(tarefaDiaria)
      break
    case 2:
      delTarefa(tarefaDiaria)
      break
    case 3:
      attTarefa(tarefaDiaria)
      break
    case 4:
      verTarefa(tarefaDiaria)
      break
    case 0:
      alert ("Você saiu com sucesso!")
      break
    default:
      alert ("A opção que você escolheu é inválida, por favor insira outra opção")
      break
  }
} while (resposta != 0)