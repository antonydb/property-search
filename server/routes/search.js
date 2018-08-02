const mockResponse = require('../mock/mock-response');
const router = require('express').Router();

const locationToMatch = mockResponse.area;
const isLocationValid = location => location.trim().toUpperCase() === locationToMatch;

router.get('/', (req, res) => {
    const { location } = req.query;

    if (location !== undefined) {
        res.redirect(`/search/${location}`)
    } else {
        res.render('search', {
            location: '',
        })
    }
});

router.get('/:location', (req, res, next) => {
    const location = req.params.location;

    if (isLocationValid(location)) {
        res.render('results', {
            location,
            results: mockResponse,
        });
    } else {
        res.render('search', {
            location,
            noResults: true,
        });
    }
})

module.exports = router;
