function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mikemgl242@gmail.com",
        To:"mikemgl242@gmail.com",
        From:"Email del contacto",
        Subject:"Contactar con la Cremería Hernández",
        Body:"El cuerpo"
    })
    .then(function(message){
        alert("Email enviado")
    })
}