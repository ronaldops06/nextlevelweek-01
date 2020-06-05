import express from 'express';

const app = express();
//Utilizado para o express entender que irá receber JSON como Request Body
app.use(express.json())

// Rota: Endereço completo da requisição
// Recurso: Qual a entidade estamos acessando no sistema

// GET: Busca uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualiza uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// ----PARÂMETROS----
// Request Param: Parâmetros que vem na própria rota que identificam um recurso (geralmente são obrigatórios).
// Query Param: São parâmetros que vem na rota também, são opcionais e utilizados para filtrar.
// Requst Body: Parâmetros para criação/atualização de informações

//----Query Builder----
// Permite escrever comandos de banco em JavaScript, assim, se alterar o banco de dados, 
// não é necessário reescrever os comandos.
// SELECT * FROM users WHERE name = 'Ronaldo'
// knex('users').where('name', 'Ronaldo').select('*')

const users = [
    'Diego',
    'Cleiton',
    'Ronaldo',
    'Daniel'
];

app.get('/users', (request, response) => {
    //Query Param são geralmente array, desta forma é feito um cast para string
    const search = String(request.query.search);

    const filteredUser = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUser);
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
})

app.listen(3333);