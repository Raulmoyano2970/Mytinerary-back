let comment = [
    {
        "showId": "63862d32bbb6cf2f4275453f",
        "comment": "I love, fantastic!",
        "userId": "63851df0213909280805d734",
        "date": "2022-12-12"
    },
    {
        "showId": "63711ea0c37be997949ef88d",
        "comment": "I don't like it!",
        "userId": "636e78ac2ebb17b28fb470a2",
        "date": "2022-12-15"
    },
    {
        "showId": "63711ea0c37be997949ef88e",
        "comment": "Wiii!!",
        "userId": "636e78d32ebb17b28fb470a4",
        "date": "2023-05-01"
    },
    {
        "showId": "63711ea0c37be997949ef88f",
        "comment": "Sorry i didn't like it at all!",
        "userId": "636e78d32ebb17b28fb470a4",
        "date": "2023-04-12"
    },
    {
        "showId": "63711ea0c37be997949ef88a",
        "comment": "Amazing!",
        "userId": "636e786d2ebb17b28fb470a0",
        "date": "2023-05-15"
    },
    {
        "showId": "63711ea0c37be997949ef88b",
        "comment": "Nice!",
        "userId": "636e786d2ebb17b28fb470a0",
        "date": "2023-08-12"
    },

]

require("dotenv").config();
require("../database");
const Comment = require("../../models/Comment");

comment.forEach((element) => {
    Comment.create(
        {
            showId: element.showId,
            comment: element.comment,
            date: element.date,
            userId: element.userId
        }
    )
})