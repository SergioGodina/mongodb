const express = require('express');
const router = express.Router()
const Log = require('../models/logs');
const User = require('../models/users');

module.exports = router;

//logs

//Post Method
router.post('/logs/post', async(req, res) => {
    const data = new Log({
        datetime: req.body.datetime,
        current_temperature: req.body.current_temperature,
        current_humedity: req.body.current_humedity,
        adjustment_temperature: req.body.adjustment_temperature,
        state: req.body.state
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/logs/getAll', async(req, res) => {
    try {
        const data = await Log.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/logs/getOne/:id', async(req, res) => {
    try {
        const data = await Log.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/logs/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Log.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/logs/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Log.findByIdAndDelete(id)
        res.send(`A Document has been deleted.. ${req.params.id}`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//users
//Post Method
router.post('/users/post', async(req, res) => {
    const data = new User({
        username: req.body.datetime,
        password: req.body.current_temperature,
        rol: req.body.current_humedity,
        state: req.body.state
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/users/getAll', async(req, res) => {
    try {
        const data = await User.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/users/getOne/:id', async(req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/users/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/users/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`A Document has been deleted.. ${req.params.id}`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})