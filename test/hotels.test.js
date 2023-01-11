const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");
const { expect } = require("chai");

describe("hotels", function (done) {
  it("Return an error when the filter does not find a hotel", function (done) {
    request(app)
      .get(`/hotels/3456789olgfdsdrt`)
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  }),
    it("check that the user sends a string in the name field", function (done) {
      request(app)
        .post("/api/hotels")
        .send({
          name: "Hotel Kyoto Tokyu aaaaaa",
          photo: [
            "https://media-cdn.tripadvisor.com/media/photo-s/1d/1d/24/c6/exterior-view.jpg",
            "https://pix10.agoda.net/hotelImages/4867798/0/09fc587691692fec627075bbd15b31a9.jpg?ca=8&ce=1&s=1024x768",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8a/c3/66/caption.jpg?w=600&h=-1&s=1",
          ],
          capacity: 500,
          cityId: "636eacf82a32900c3464f4a1",
          userId: "636e67886d5bdab4b6f1716b",
        })
        .expect((res) => {
          assert.isNumber(res.body.data.capacity);
        })
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  it(`Hotel successfully created`, function (done) {
    request(app)
      .post(`/api/hotels/`)
      .send({
        name: "Hotel aaaaaa",
        photo: [
          "https://media-cdn.tripadvisor.com/media/photo-s/1d/1d/24/c6/exterior-view.jpg",
          "https://pix10.agoda.net/hotelImages/4867798/0/09fc587691692fec627075bbd15b31a9.jpg?ca=8&ce=1&s=1024x768",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8a/c3/66/caption.jpg?w=600&h=-1&s=1",
        ],
        capacity: 500,
        cityId: "636eacf82a32900c3464f4a1",
        userId: "636e67886d5bdab4b6f1716b",
      })
      .expect(201)
      .end(function (err) {
        if (err) return done(err);
        done();
      });
  });
});
it('The hotel was removed', function (done) {
  token = ""
  let hotelId = "6384557ca9665972cdced228"
  request(app)
      .delete(`/api/hotels/${hotelId}`)
      .auth(token, { type: "bearer" })
      .expect(200 )
      .end(function (err, res) {
          if (err) return done(err);
          done()
      })
})
