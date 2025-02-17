const express = require('express');
const router = express.Router();
const {Rdv} = require('../models');

router.get('/', async (req, res) => {
    try {
        const rdv = await Rdv.findAll(); 
        res.status(201).json(rdv);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const rdv = await Rdv.create(req.body);
        res.status(201).json(rdv)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const rdv = await Rdv.findByPk(id);

        if (!rdv) {
            return res.status(404).json({ error: "Rendez-vous non trouvé" });
        }

        await rdv.destroy();
        res.status(200).json({ message: "Rendez-vous supprimé avec succès" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const rdv = await Rdv.findByPk(id);

        if (!rdv) {
            return res.status(404).json({ error: "Rendez-vous non trouvé" });
        }

        await rdv.update(req.body);
        res.status(200).json({ message: "Rendez-vous mis à jour avec succès", rdv });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router