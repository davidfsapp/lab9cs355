/**
 * Created by student on 3/15/18.
 */
var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM skill;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.insert = function(params, callback)  {
    var query = 'INSERT INTO skill (skill_id) VALUES (?)';

    var queryData = [params.skill_id];

    connection.query(query, queryData, function(err, result)  {
        callback(err, result);
    });
};