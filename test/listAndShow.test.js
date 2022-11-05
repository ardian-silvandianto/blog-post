const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const baseURL = "https://jsonplaceholder.typicode.com"
chai.use(chaiHttp);


describe('Search output for blog posts', () => {
    it('List all posts', (done) => {
        chai.request(baseURL)
            .get('/posts')
            .end((err, res) => {
                res.should.to.have.status(200); //make sure that the endpoint is alive
                res.should.be.json; //Making sure that the response is the correct format
                res.body.should.be.a('array');
                //what we are testing for is true to the response
                res.body[0].should.have.property('userId');
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('body');
                done();
            });

    }); it('Show an existing post', (done) => {
        let id = 1; //specific post you want to show
        chai.request(baseURL)
            .get('/posts/' + id) // it is looking for 
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('body');
                done();
            });

    }); it('Show all posts from a single user', (done) => {
        let userId = 2; //specific post you want to show
        chai.request(baseURL)
            .get('/posts?' + userId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('body');
                done();
            });
    });
});