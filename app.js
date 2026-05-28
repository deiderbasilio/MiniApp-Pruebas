const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Aplicación funcionando correctamente'
    });
});

module.exports = app;