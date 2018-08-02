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

test('Search page redirects when postcode is present', (t) => {
    request(app)
        .get('/search')
        .query({ location: 'n11' })
        .end((err, res) => {
            t.same(res.status, 302);
            t.error(err, 'no error');
            t.end();
        });
});

test('Search with valid location', (t) => {
    request(app)
        .get('/search/n11')
        .end((err, res) => {
            t.same(res.status, 200);
            t.error(err, 'no error');
            t.end();
        });
});

test('Search with invalid location', (t) => {
    request(app)
        .get('/search/se11')
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
