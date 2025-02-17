const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

db.sequelize.sync().then(() => {
    console.log('Database connected');
});

// Define routes here
const patientRoutes = require('./routes/Patients');
app.use('/Patients', patientRoutes);

const praticienRoutes = require('./routes/Praticiens');
app.use('/Praticiens', praticienRoutes);

const rdvRoutes = require('./routes/RendezVous');
app.use('/RendezVous', rdvRoutes);

const factureRoutes = require('./routes/Factures');
app.use('/Factures', factureRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



