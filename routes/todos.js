var express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose')
    , Todo = require('../models/Todo.js')
    , moment = require('moment');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
//router.get('/:id', function(req, res, next) {
//  Todo.findById(req.params.id, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/search/:note *///RegExp can be used for searching with strings 'i' stands for insensitive
//router.get('/search/:note', function(req, res, next){
//  Todo.find({note: new RegExp (req.params.note, 'i') }, function (err, todos) {
//    if (err) return next(err);
//    res.json(todos);
//  });
//});


//$gt - greater than, $gte - greater than or equal to, $lt - less than, $lte - less than or equal to
router.get('/search', function(req, res, next){

    Todo.find({}, null, { sort: {number: 1}}
        ,function (err, todos) {
        if (err) return next(err);
        res.json(todos);
  });
});

console.log('todos loaded');

module.exports = router;