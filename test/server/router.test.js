const { test } = require('tap');
const request = require('supertest');
const app = require('../../server/app');

test('Search page is accessible', (t) => {
    request(app)
        .get('/search')
        .end((err, res) => {
            t.same(res.status, 200);
            t.error(err, 'no error');
            t.end();
        });
});

test('Search page accept postcode as query param', (t) => {
    request(app)
        .get('/search?postcode=n11')
        .end((err, res) => {
            t.same(res.status, 200);
            t.error(err, 'no error');
            t.end();
        });
});

test('Return 404 for unsupported route', (t) => {
    request(app)
        .get('/unsupported')
        .end((err, res) => {
            t.same(res.status, 404);
            t.end();
      });
});
