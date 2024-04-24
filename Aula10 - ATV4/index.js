const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

const livros = [
  { id: 1, titulo: 'O Alquimista', autor: 'Paulo Coelho', ano: 1988 },
  { id: 2, titulo: 'O Profeta', autor: 'Kahlil Gibran', ano: 1923 }
];

app.get('/livros', (req, res) => {
  const { titulo } = req.query;
  let resultados = livros;
  if (titulo) {
    resultados = livros.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
  }
  res.json(resultados);
});

app.get('/autores', (req, res) => {
  const { autor } = req.query;
  let resultados = [...new Set(livros.map(livro => livro.autor))];
  if (autor) {
    resultados = resultados.filter(nome => nome.toLowerCase().includes(autor.toLowerCase()));
  }
  res.json(resultados);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
