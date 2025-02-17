const express = require('express');
const router = express.Router();
const {Patient} = require('../models');

router.get('/', async (req, res) => {
    try {
        const patient = await Patient.findAll(); 
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const patient = await Patient.findByPk(id);

        if (!patient) {
            return res.status(404).json({ error: "Patient non trouvé" });
        }

        await patient.destroy();
        res.status(200).json({ message: "Patient supprimé avec succès" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const patient = await Patient.findByPk(id);

        if (!patient) {
            return res.status(404).json({ error: "Patient non trouvé" });
        }

        await patient.update(req.body);
        res.status(200).json({ message: "Patient mis à jour avec succès", patient });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router