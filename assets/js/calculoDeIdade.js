function calcularIdade(dataNascimento) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();
  
    const anoNascimento = parseInt(dataNascimento.split('-')[0]);
    const mesNascimento = parseInt(dataNascimento.split('-')[1]);
    const diaNascimento = parseInt(dataNascimento.split('-')[2]);
  
    let idade = anoAtual - anoNascimento;
  
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
  
    return idade;
  }
  window.onload = function (){
  const dataNascimento = '1997-04-24'; 
  const idade = calcularIdade(dataNascimento);

  document.getElementById('idade').textContent=idade
}

  