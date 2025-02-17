const express = require('express');
const router = express.Router();
const {Patient} = require('../models');

router.post('/', async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})
module.exports = router