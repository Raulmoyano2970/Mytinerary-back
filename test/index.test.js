const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/cities", function () {
  it("verify that it is an array of cities", function (done) {
    request(app)
      .get("/api/cities/")
      .expect((res) => {
        assert.isArray(res.body.data);
        res.body.data.forEach((city) => {
          assert.isObject(city);
        });
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });

});
  describe("POST /api/cities", function () {
    it("verify that the user sends a string in the name field", function (done) {
        request(app)
            .post("/api/cities")
            .send({
                name: "Sydney",
                continent: "Oceanía",
                photo:
                    "https://898904.smushcdn.com/2130394/wp-content/uploads/2017/11/estudiar-en-sydney-1-1023x424.jpg?lossy=1&strip=1&webp=1",
                population: 1000000,
                userId: "636e67886d5bdab4b6f1716d"
            })
            .expect((res) => {
                assert.isString(res.body.data.name, 'Name is string');
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    })
});
describe("POST /api/hotels", function () {
    it("check status 200 when unable to create a hotel", function (done) {
        request(app)
            .post("/api/hotels")
            .send({
                name: "S",
                photo:
                    "https://898904.smushcdn.com/2130394/wp-content/uploads/2017/11/estudiar-en-sydney-1-1023x424.jpg?lossy=1&strip=1&webp=1",
            })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});

describe("DELETE /api/cities", function () {//deletee
  it('The city was removed', function (done) {//agregamos
    let citiId = "636e9b452367c51ce27eb199"
    request(app)
 
      .delete("/api/cities/638366426546a1922ac4bc1f")
      .auth(token, {type: "bearer"})
      .expect((response) => {
        assert.equal(response.status, 200);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
})

it('The city was removed', function (done) {
  let hotelId = "63702ff85ef69e08afc128e4"
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODE0YWU3YTFlMWVmMjlhMmQwNDNmNCIsImlhdCI6MTY2OTY0MDkwOSwiZXhwIjoxNjY5NzI3MzA5fQ.CtZ_ieXsmIMe5WJgnRxQ1DnAu_witZMvWz-QFczlSyQ"
  request(app)
      .delete(`/api/hotels/${hotelId}`)
      .auth(token, { type: "bearer" })
      .expect(200 )
      .end(function (err, res) {
          if (err) return done(err);
          done()
      })
})

