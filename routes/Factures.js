const express = require('express');
const router = express.Router();
const {Facture} = require('../models');

router.post('/', async (req, res) => {
    try {
        const factures = await Facture.create(req.body);
        res.status(201).json(factures)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})
module.exports = router