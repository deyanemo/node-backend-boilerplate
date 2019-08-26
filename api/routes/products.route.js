const router = require('express').Router();



// main endpoint
router.get('/', (req, res) => {

    res.status(201).json({
        reponse: "Executed successfuly",
        code: "PRODUCTS_SUCCESS",
        status: 201,
        results: []
    
    })

});

module.exports = router;