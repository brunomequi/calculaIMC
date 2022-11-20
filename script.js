function calculaImc(event) {
  event.preventDefault();
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;

  let imc = peso / (altura * altura);
  let resultado = document.getElementById('resultado');

  if (imc <= 17) {
    resultado.innerHTML = `Você está bem abaixo do peso: IMC ${imc.toFixed(2)}`;
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `Você está abaixo do peso: IMC ${imc.toFixed(2)}`;
  } else if (imc > 18.5 && imc <= 24.49) {
    resultado.innerHTML = `Você está com o peso ideal: IMC ${imc.toFixed(2)}`;
  } else if (imc > 24.5) {
    resultado.innerHTML = `Cuidado!! Você precisa perder peso: IMC ${imc.toFixed(
      2,
    )}`;
  }
  document.getElementById('peso').value = ''; // Limpa o campo
  document.getElementById('altura').value = ''; // Limpa o campo
}
