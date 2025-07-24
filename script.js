document.getElementById("botaoEnviar").addEventListener("click", validaFormulario); 


function validaFormulario() {

    
if (document.getElementById("nome").value !="" && document.getElementById("email").value !="") {
    alert("Obrigado por se inscrever! Você receberá novidades sobre o site no seu e-mail.");
}else {
    alert("Por favor, preencha todos os campos antes de enviar.");
}
}
    