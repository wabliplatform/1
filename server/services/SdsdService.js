/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Sdsd } = require('../models/Sdsd');

/**
* Creates the data
*
* sdsd Sdsd data to be created
* returns sdsd
* */
const createsdsd = ({ sdsd }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Sdsd(sdsd).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* sdsdId String the Id parameter
* no response value expected for this operation
* */
const deletesdsd = ({ sdsdId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Sdsd.findOneAndDelete({ _id:sdsdId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllsdsd = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({ }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* sdsdId String the Id parameter
* returns sdsd
* */
const getsdsd = ({ sdsdId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Sdsd.findById(sdsdId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* sdsdId String the Id parameter
* sdsd Sdsd data to be updated (optional)
* returns sdsd
* */
const updatesdsd = ({ sdsdId, sdsd }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Sdsd.findOneAndUpdate({ _id:sdsdId },sdsd).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createsdsd,
  deletesdsd,
  getAllsdsd,
  getsdsd,
  updatesdsd,
};
