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
app.use('/patients', patientRoutes);

const praticienRoutes = require('./routes/Praticiens');
app.use('/praticiens', praticienRoutes);

const rdvRoutes = require('./routes/RendezVous');
app.use('/rendezVous', rdvRoutes);
const factureRoutes = require('./routes/Factures');
app.use('/factures', factureRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



