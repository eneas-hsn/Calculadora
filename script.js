function reseta() {
    document.getElementById('text').value='';
}
function preencher(valor) {
    document.getElementById('text').value+=valor;
}

function calcular() {
    var resultado=0;
    resultado=document.getElementById('text').value;
    document.getElementById('text').value=eval(resultado);
}
//function apaga() {
   // document.getElementById('text').value-=preencher();}
   function apagar() {
    let input = document.getElementById('text');
    let inputText = text.value;
    input.value = inputText.substring(0,inputText.length-1);
    console.log(text.value);
  }