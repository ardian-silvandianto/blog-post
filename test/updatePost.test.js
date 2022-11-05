const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const baseURL = "https://jsonplaceholder.typicode.com"
chai.use(chaiHttp);


describe('Updating an existing post', () => {
    it('Update a post', (done) => {
        let id = 99
        chai.request(baseURL)
            .patch('/posts/' + id)
            .send({
                'title': 'New kid in the block',
                'body': 'The first five recognized dwarf planets are Ceres, Pluto, Eris, Makemake and Haumea.',
            })
            .end((err, res) => {
                res.should.to.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('userId');
                res.body.should.have.property('id');
                res.body.should.have.property('title');
                res.body.should.have.property('body');
                res.body.userId.should.equal(10);
                res.body.id.should.equal(99);
                res.body.title.should.equal('New kid in the block');
                res.body.body.should.equal('The first five recognized dwarf planets are Ceres, Pluto, Eris, Makemake and Haumea.');
                done();
            });
    });
});