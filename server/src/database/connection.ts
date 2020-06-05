import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

// Migrations: Histórico do banco de dados, é um arquivo que contem as alterações do banco de acordo coma a versão do software. 