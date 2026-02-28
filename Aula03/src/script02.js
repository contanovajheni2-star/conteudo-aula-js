//Exemplo de If Else
//const hora = new Date().getHours();
//const hora = 18;
//const minutos = new Date().getMinutes();
//const segundos = new Date().getSeconds();
//const horário = String(hora) + ':' + String(minutos);
//let saudacao;

//if (hora > 18) {
    //saudacao = 'Boa noite!';
//}else {
    //saudacao = 'Bom dia';
//}

//document.getElementById('ex1').innerHTML = saudacao;
//document.getElementById('ex1').innerHTML = 'agora são ' + horario;
//document.getElementById('ex2').innerHTML = 'Agora são: ${horario}';

//Exemplo If  Else If
const hora = 7;
const minutos = new Date().getMinutes();
const segundos = new Date().getSeconds();
const horario = String(hora) + ':' + String(minutos);
let saudacao;

if (hora > 18) {
    saudacao = 'Boa noite!';
}else if(hora > 12) {
    saudacao = 'Bom dia';
}else {
    saudacao = 'Bom dia!'
}

document.getElementById('ex1').innerHTML = saudacao;
//document.getElementById('ex1').innerHTML = 'agora são ' + horario;
document.getElementById('ex2').innerHTML = `Agora são: ${horario}`;