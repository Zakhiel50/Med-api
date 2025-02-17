const express = require('express');
const router = express.Router();
const {Rdv} = require('../models');

router.post('/', async (req, res) => {
    try {
        const rdv = await Rdv.create(req.body);
        res.status(201).json(rdv)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})
module.exports = router