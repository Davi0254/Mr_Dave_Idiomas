import app from './indice.js';

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta${PORT}`);
});