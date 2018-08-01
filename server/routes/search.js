const mockResponse = require('../mock/mock-response');
const router = require('express').Router();

const postcodeToMatch = mockResponse.area;
const isMatchingPostcode = (postcode = '') => postcode.trim().toUpperCase() === postcodeToMatch;

router.get('/', (req, res) => {
    const postcode = req.query.postcode || '';

    if (isMatchingPostcode(postcode)) {
        res.render('results', {
            postcode,
            results: mockResponse,
        });
    } else {
        res.render('search', {
            postcode,
        });
    }
});

module.exports = router;
