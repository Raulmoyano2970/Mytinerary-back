const Hotel = require("../models/Hotel");

const controller = {
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        id: new_hotel._id,
        success: true,
        message: "Hotel created successfully",
        data: new_hotel,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  read: async (req, res) => {
    let query = {};
    let order = {};
    if (req.query.name) {
      query = {
        name: { $regex: req.query.name, $options: "i" },
      };
    }
    if (req.query.order) {
      order = { capacity: req.query.order };
    }
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    try {
      let get_hotel = await Hotel.find(query).sort(order);
      if (get_hotel.length > 0) {
        res.status(200).json({
          id: get_hotel._id,
          data: get_hotel,
          success: true,
          message: "Hotel read successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "hotels not found",
          response: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  readOnlyOne: async (req, res) => {
    let id = req.params.id;
    try {
      let hotel = await Hotel.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });
      if (hotel) {
        res.status(200).json({
          response: hotel,
          success: true,
          message: "found Hotel",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "no Hotel obtained",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let hotel = await Hotel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (hotel) {
        res.status(200).json({
          success: true,
          message: "The hotel was successfully modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "There is no hotel that matches",
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
    let { id } = req.params;
    try {
      let hotel = await Hotel.findOneAndDelete({ _id: id });
      if (hotel) {
        res.status(200).json({
          success: true,
          message: "the hotel is removed",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there are no matching hotels",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
module.exports = controller;
