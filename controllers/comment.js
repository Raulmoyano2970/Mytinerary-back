const Comment = require("../models/Comment");
const User = require("../models/User");

const controller = {

    create: async (req, res) => {
        let id = req.body.userId;
        let { showId, comment, userId, date, itineraryId } = req.body;

        try {
            let user = await User.findOne({ _id: id });
            userId = user._id;

            let comments = await (
                await Comment.create({ showId, comment, userId, date, itineraryId })
            ).populate("userId", {
                photo: 1,
                name: 1,
            });
            res.status(201).json({
                response: comments,
                success: true,
                message: "The comment was successfully created",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    read: async (req, res) => {
        let comments;

        let query = {};
        if (req.query.showId) {
            query = { showId: req.query.showId };
        }
        if (req.query.itineraryId) {
            query = { itineraryId: req.query.itineraryId };
        }

        try {
            comments = await Comment.find(query).sort({ date: "desc" }).populate("userId", {
                photo: 1,
                name: 1,
                logged: 1
        
            });;
            res.json({ success: true, response: comments });
        } catch (error) {
            console.log(error);
            res.status(500).json();
        }
    },

    update: async (req, res) => {
        let { id } = req.params;
        try {
            let one = await Comment.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
            });
            if (one) {
                res.status(200).json({
                    id: one._id,
                    success: true,
                    message: "The comment was successfully modified",
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "The comment was not found",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let comment = await Comment.findOneAndDelete({ _id: id })
            if (comment) {
                res.status(200).json({
                    res: comment,
                    success: true,
                    message: "The comment was successfully deleted"
                })

            } else {
                res.status(404).json({
                    res: comment,
                    success: false,
                    message: "The comment was not found"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }
};

module.exports = controller;