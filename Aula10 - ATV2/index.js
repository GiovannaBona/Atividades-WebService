const http = require('http');

const livros = [
  { id: 1, titulo: 'O Alquimista', autor: 'Paulo Coelho', ano: 1988 },
  { id: 2, titulo: 'O Profeta', autor: 'Kahlil Gibran', ano: 1923 }
];

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/livros":
      res.writeHead(200);
      res.end(JSON.stringify(livros));
      break;
    case "/autores":
      const autores = [...new Set(livros.map(livro => livro.autor))];
      res.writeHead(200);
      res.end(JSON.stringify(autores));
      break;
    default:
      res.writeHead(404);
      res.end("Não encontrado");
  }
};

const server = http.createServer(requestListener);
const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});