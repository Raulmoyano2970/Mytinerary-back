const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        data: new_city,
        success: true,
        message: "City created successfully",
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
    if (req.query.continent) {
      query = { continent: req.query.continent };
    }
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }

    try {
      let get_city = await City.find(query).populate({
        path: "userId",
        select: "role -_id",
      });
      if (get_city.length > 0) {
        res.status(200).json({
          id: get_city._id,
          data: get_city,
          success: true,
          message: "City read successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "no cities found",
          data: [],
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
      let city = await City.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });
      if (city) {
        res.status(200).json({
          response: city,
          success: true,
          message: "found city",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "no city obtained",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {//EMPIEZA
    let { id } = req.params
    try {
      let cityUser = await City.findById(id)
      if (cityUser.userId.equals(req.user.id)) {
        let city = await City.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (city) {
          res.status(200).json({
            data: city,
            success: true,
            message: "The city was successfully modified",
            data: city
          })
        } else {
          res.status(404).json({
            success: false,
            message: "There is no city that matches"
          })
        }
      } else {
        res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params
    try {
      let cityUser = await City.findById(id)
      if (cityUser.userId.equals(req.user.id)) {
        let city = await City.findOneAndDelete({ _id: id })
        if (city) {
          res.status(200).json({
            success: true,
            message: "The city is removed",
            data: city
          })
        } else {
          res.status(404).json({
            success: false,
            message: "There are no matching cities"
          })
        }
      } else {
        res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  }
};

module.exports = controller;
