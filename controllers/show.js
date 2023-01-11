const Show = require("../models/Show");

const controller = {
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "User created successfully.",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  readShows: async (req, res) => {
    let query = {};

    if (req.query.hotelId) {
      query = { hotelId: req.query.hotelId };
    }
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    try {
      let shows = await Show.find(query).populate({
        path: "userId",
        select: "role -_id",
      });
      if (shows) {
        res.status(200).json({
          success: true,
          message: "Show was found",
          data: shows,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Show no found",
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
      let showUser = await Show.findById(id)
      if (showUser.userId.equals(req.user.id)) {
        let show = await Show.findOneAndUpdate({ _id: id }, req.body, { new: true });
        if (show) {
          res.status(200).json({
            success: true,
            message: 'Show updated successfully',
            data: show,
          });
        } else {
          res.status(404).json({
            success: false,
            message: 'Show not found',
          });
        }
      } else {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
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
      let show = await Show.findOneAndDelete({ _id: id });
      if (show) {
        res.status(200).json({
          success: true,
          message: "the show is removed",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there are no matching shows",
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
