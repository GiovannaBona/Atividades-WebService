const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/mensagem-do-dia', (req, res) => {
    const today = new Date();
    const mensagens = [
        "Tenha um ótimo dia!",
        "Que seu dia seja cheio de alegria!",
        "Aproveite ao máximo cada momento!",
        "Desejando-lhe um dia cheio de sucesso!",
        "Que este dia seja produtivo e gratificante!",
        "Espalhe amor e bondade por onde você passar!",
        "Que você encontre motivos para sorrir hoje!"
    ];
    
    const mensagemDoDia = mensagens[today.getDay()];

    res.json({ mensagem: mensagemDoDia });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});