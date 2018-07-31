const mockResponse = require('../mock/mock-response');

const results = (req, res, next) => {
    res.render('results', {
        data: mockResponse
    });
};

module.exports = results;
