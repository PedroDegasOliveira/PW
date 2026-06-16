const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'appuserlocalhost',       // seu usuário MySQL
  password: 'senha123',  // sua senha MySQL
  database: 'funcionariosDB'
});

// Rota para listar funcionários
app.get('/funcionarios', (req, res) => {
  db.query('SELECT * FROM funcionarios', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Rota para adicionar funcionário
app.post('/funcionarios', (req, res) => {
  const { nome, funcao, salario } = req.body;
  db.query('INSERT INTO funcionarios (nome, funcao, salario) VALUES (?, ?, ?)',
    [nome, funcao, salario],
    (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, nome, funcao, salario });
    }
  );
});

// Rota para deletar funcionário
app.delete('/funcionarios/:id', (req, res) => {
  db.query('DELETE FROM funcionarios WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Funcionário removido' });
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
fetch('/funcionarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nome: sNome.value,
    funcao: sFuncao.value,
    salario: sSalario.value
  })
}).then(res => res.json())
  .then(data => {
    console.log('Salvo no banco:', data);
    loadItens();
  });

// Carregar funcionários
async function loadItens() {
  const res = await fetch('/funcionarios');
  itens = await res.json();
  tbody.innerHTML = '';
  itens.forEach((item, index) => insertItem(item, index));
}