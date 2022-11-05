const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const baseURL = "https://jsonplaceholder.typicode.com"
chai.use(chaiHttp);


describe('Delete a single blog post', () => {
    it('Check that the post exists', (done) => {
        let id = 12
        chai.request(baseURL)
            .get('/posts/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
            });
    }); it('Delete a post', (done) => {
        let id = 12
        chai.request(baseURL)
            .delete('/posts/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
            });
    });
});
