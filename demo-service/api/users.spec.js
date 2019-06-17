var request = require('supertest');
var should = require('should');
var server = require('../server/server');

describe('Users API', () => {
    //  Our running app (rebuilt for each test) and our repo, which
    //  we can mock for each test.
    var app = null;
    var testUsers = [{
        userName: 'AAA',
        userTel: '0977333444'
    }, {
        userName: 'BBB',
        userTel: '0988555222'
    }
    ];
    var testRepo = {
        getUsers: () => {
            return Promise.resolve(testUsers);
        },
        getUserByTel: (userTel) => {
            return Promise.resolve(testUsers.find((user) => {
                return user.Tel === userTel;
            }));
        }
    };

    beforeEach(() => {
        return server.start({
            port: 1234,
            repository: testRepo
        }).then(function (svr) {
            app = svr;
        });
    });

    afterEach(() => {
        app.close();
        app = null;
    });

    it('returns a 404 for an unknown user', (done) => {

        request(app)
            .get('/search?Tel=0977333444')
            .expect(404, done);
    });

    it('returns a 200 for a known user', (done) => {

        request(app)
            .get('/search?Tel=0981155222')
            .expect(404, done);
    });

});