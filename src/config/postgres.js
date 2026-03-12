const { Pool } = require('pg');
const env = require('./env');

const pool = new Pool({
    connectionString: env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});


pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
});

async function query(text, params) {
    const start = Date.now();
    try {
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        return res;
    } catch (err) {
        console.error('Error executing query', { text, params, err: err.message });
        throw err;
    }
}

async function getClient() {
    const client = await pool.connect();
    const release = client.release;
    client.release = () => {
        try {
            release();
        } catch (e) {
            console.warn('Client already released', e.message);
        }
    };
    return client;
}

async function closePool() {
    await pool.end();
}

module.exports = { pool, query, getClient, closePool };
