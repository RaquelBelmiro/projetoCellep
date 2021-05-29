/Aguarda o DOM estar pronto para executar os scripts JQuery
$(document).ready(function(){
//Recebe o evento submit do formulário ärea do aluno
$("#loginAluno").submit(function(event){
// Testa se usuário e senha estão corretos 
if($("#inputUsuario").val() == "root" && $("#inputSenha").val() == "1234"){
// Adiciona classes CSS a DIV mensagem
$("#mensagem").addClass("alert alert-success alert-dismissible fade show")
// Remove a classe "alert-warning" caso ela exista
$("#mensagem").removeClass("alert-warning")
// apresenta a pensagem para o usuário por 3s
$("#mensagem").text("Usuário logado").show().fadeOut(3000)
}else{
// Adiciona classes CSS a DIV mensagem
$("#mensagem").addClass("alert alert-warning alert-dismissible fade show")
// Remove a classe "alert-success" caso ela exista
$("#mensagem").removeClass("alert-success")
// apresenta a pensagem para o usuário por 3s
$("#mensagem").text("Usuário ou Senha Inválida!").show().fadeOut(3000)
event.preventDefault() //bloquiea o evento de submit
}
})
})