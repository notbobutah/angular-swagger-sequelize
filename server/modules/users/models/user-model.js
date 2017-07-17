"use strict";
var dbConnection = require('../../../core/db-connection');
var Sequelize = require('sequelize');
var seedModel = require('../seed').seedModel;


var db = dbConnection();
var sequalizeModel = db.define('user', {
    iduser: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [2, 30]
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    reputation: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0,
            max: 5
        }
    }
});
console.log("calling seed model for user");
sequalizeModel.sync({ force: true })
.then(function (model) {
var seed = seedModel(model);
});
exports.Model = sequalizeModel;

//# sourceMappingURL=../../../source-maps/modules/users/models/user-model.js.map
