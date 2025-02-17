const express = require('express');
const router = express.Router();
const {Facture} = require('../models');


router.get('/', async (req, res) => {
    try {
        const facture = await Facture.findAll(); 
        res.status(201).json(facture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const facture = await Facture.create(req.body);
        res.status(201).json(facture)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const facture = await Facture.findByPk(id);

        if (!facture) {
            return res.status(404).json({ error: "facture non trouvé" });
        }

        await facture.destroy();
        res.status(200).json({ message: "facture supprimé avec succès" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const facture = await Facture.findByPk(id);

        if (!facture) {
            return res.status(404).json({ error: "facture non trouvé" });
        }

        await facture.update(req.body);
        res.status(200).json({ message: "facture mis à jour avec succès", facture });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router