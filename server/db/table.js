const db = require('./db');
const Sequelize = require('sequelize');

const Table = db.define('table',{
    name:{type:Sequelize.STRING},
    content:{type:Sequelize.TEXT}
})

module.exports=Table