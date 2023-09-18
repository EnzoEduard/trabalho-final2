/*
function tarefa1() {
    console.log("ligar os munitores.");
}
  
  function tarefa2() {
    console.log("olhar a papelada.");
  }
  
  function tarefa3() {
    console.log("opção invalida");
  }

  function exibirMenu() {
    console.log("Selecione uma opção:");
    console.log("1. criar tarefa");
    console.log("2. trocar tarefas");
    console.log("3. apagar tarefa");
  }

  exibirMenu();
  
  let tarefaParaCriar=[];
  function criarTarefa() {
  let descr = prompt('crie uma descrição');
  let nome = prompt('nome da terefa');
    tarefaParaCriar.push({titulo: nome ,descricao:descr, status: "pendente"})
  }
//criarTarefa;

  const escolha = prompt("Digite o número da opção desejada:");
  
  if (escolha === "1") {
    criarTarefa();
  } else if (escolha === "2") {
    tarefa2();
  } else if (escolha === "3") {
    tarefa3();
  } else 
    console.log("Opção inválida.");
  */
  
    
    // Definindo um array para armazenar as tarefas
const tasks = [];

// Função para criar uma nova tarefa
function criarTarefa(titulo, descricao) {
  const novaTarefa = {
    titulo: titulo,
    descricao: descricao,
    status: "pendente"
  };
  tasks.push(novaTarefa);
  console.log("Nova tarefa criada:");
  console.log(novaTarefa);
}

// Função para visualizar a lista de tarefas
function visualizarTarefas() {
  console.log("Lista de tarefas:");
  tasks.forEach((tarefa, index) => {
    console.log(`[${index + 1}] Título: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Status: ${tarefa.status}`);
  });
}

// Função para marcar uma tarefa como "concluída"
function marcarTarefaConcluida(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].status = "concluída";
    console.log(`Tarefa "${tasks[index].titulo}" marcada como concluída.`);
  } else {
    console.log("Índice inválido.");
  }
}

// Função para editar uma tarefa existente
function editarTarefa(index, novoTitulo, novaDescricao, novoStatus) {
  if (index >= 0 && index < tasks.length) {
    const tarefa = tasks[index];
    if (novoTitulo) tarefa.titulo = novoTitulo;
    if (novaDescricao) tarefa.descricao = novaDescricao;
    if (novoStatus) tarefa.status = novoStatus;
    console.log(`Tarefa editada:`);
    console.log(tarefa);
  } else {
    console.log("Índice inválido.");
  }
}

// Função para excluir uma tarefa
function excluirTarefa(index) {
  if (index >= 0 && index < tasks.length) {
    const tarefaRemovida = tasks.splice(index, 1);
    console.log(`Tarefa "${tarefaRemovida[0].titulo}" removida.`);
  } else {
    console.log("Índice inválido.");
  }
}

// Exemplo de uso
criarTarefa("Fazer compras", "Comprar leite e ovos");
criarTarefa("Estudar JavaScript", "Revisar funções e arrays");
visualizarTarefas();
marcarTarefaConcluida(0);
editarTarefa(1, "Estudar JavaScript", "Revisar funções e objetos");
excluirTarefa(0);
visualizarTarefas();


/*
as funções 1,2,3 servem para falar as tarefas
no caso,a função um fala sobre a tarefa1 que é "ligar munitores" 
ea função 2 fala sobre a tarefa2 que é "olhar papelada"
ea função 3 fica como "opção invalida" pois a tarefa não existe

logo depois dessas, temos a função "exibir menu" onde o usuario pode criar,trocar e apagar tarefa.
*/
