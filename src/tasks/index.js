'use strict';

const errors = require('../errors');

const myStrings = ["Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"];


exports.findAll = (req, res, next) => {
  // Simulate task list, normally this would be retrieved from a database

  const tasks = [];
  const elements = Math.floor(Math.random() * 5) + 1;

  for (let index = 0; index < elements; index++) {
    tasks.push({
      'TemperatureC': Math.floor(Math.random() * 75) - 20,
      'Date': Date.now(),
      'Summary': myStrings[Math.random(myStrings.length)]
    })
  }

  res.status(200).json(tasks);
};

exports.buggyRoute = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'));
};
