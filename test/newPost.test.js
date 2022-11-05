const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const baseURL = "https://jsonplaceholder.typicode.com"
chai.use(chaiHttp);


describe('Posting a new blog post', () => {
    var body
    it('Add new blog post', (done) => {
        chai.request(baseURL)
            .post('/posts') // endpoint with we will test
            .send({
                'title': 'Lorem Ipsum',
                'body': 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
                'userId': 3
            })
            .end((err, res) => { // tests to make
                //TODO make it work so response can be 201 or 202
                res.should.to.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('body');
                res.body.should.have.property('id');
                res.body.id.should.equal(101);
                res.body.title.should.equal('Lorem Ipsum');
                res.body.body.should.equal('Contrary to popular belief, Lorem Ipsum is not simply random text.');
                res.body.userId.should.equal(3);
                done();
            });
    });
});