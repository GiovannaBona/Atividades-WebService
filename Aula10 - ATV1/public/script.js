document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/mensagem-do-dia')
        .then(response => response.json())
        .then(data => {
            document.getElementById('mensagemDoDia').innerText = data.mensagem;
        })
        .catch(error => {
            console.error('Erro ao obter a mensagem do dia:', error);
        });
});