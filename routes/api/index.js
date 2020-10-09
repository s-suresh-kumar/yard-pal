const router = require('express').Router();
const sellerRoutes = require('./sellers');

router.use('/sellers', sellerRoutes);

module.exports = router;