const express = require('express');
const router = express.Router();
const { addHotel, getAllHotels } = require('../Controllers/Hotel');

router.post('/hotels', addHotel);
router.get('/hotels', getAllHotels);

module.exports = router;