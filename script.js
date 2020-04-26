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
   function apagar() {
    text.value = text.value.substring(0,text.value.length-1);
  }