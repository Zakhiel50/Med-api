const express = require('express');
const router = express.Router();
const { Praticien } = require('../models'); // 🔹 Singulier

router.post('/', async (req, res) => {
    try {
        const praticien = await Praticien.create(req.body); // 🔹 Singulier ici aussi
        res.status(201).json(praticien);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
