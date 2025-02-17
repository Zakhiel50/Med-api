const express = require('express');
const router = express.Router();
const { Praticien } = require('../models');
const bodyParser = require('body-parser');
router.get('/', async (req, res) => {
    try {
        const praticien = await Praticien.findAll(); 
        res.status(201).json(praticien);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const praticien = await Praticien.create(req.body);
        res.status(201).json(praticien);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const praticien = await Praticien.findByPk(id);

        if (!praticien) {
            return res.status(404).json({ error: "Praticien non trouvé" });
        }

        await praticien.destroy();
        res.status(200).json({ message: "Praticien supprimé avec succès" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const praticien = await Praticien.findByPk(id);

        if (!praticien) {
            return res.status(404).json({ error: "Praticien non trouvé" });
        }

        await praticien.update(req.body);
        res.status(200).json({ message: "Praticien mis à jour avec succès", praticien });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
