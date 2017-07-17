"use strict";
var dbConnection = require('../../../core/db-connection');
var Sequelize = require('sequelize');
var seedModel = require('../seed').seedModel;


var db = dbConnection();
var sequalizeModel = db.define('card', {
    idcard: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    suit: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [2, 30]
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    value: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 200]
        }
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            min:  0,
            max: 256
        }
    },
    size: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 100
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
console.log("calling seed model for card");
sequalizeModel.sync({ force: true })
.then(function (model) {
var seed = seedModel(model);
});
// sequalizeModel.sync({ force: true }).then(function (model) {
//     var names = ['Bailey', 'Lucy', 'Charlie', 'Rocky', 'Cooper', 'Sam', 'Zeus'], cardPhrases = ['Such Wow Angular2', 'Amaz app with Typescript', 'Much NodeJs', 'Such amaze Sequalize ORM', 'Such wow PostgreSQL'], randomName = function () {
//         return names[Math.floor(Math.random() * names.length)];
//     }, randomPhrase = function () {
//         return cardPhrases[Math.floor(Math.random() * cardPhrases.length)];
//     };
//     for (var i = 0; i < 20; i++) {
//         model.create({
//             firstName: randomName() + i,
//             lastName: randomName() + i,
//             favoritecardPhrase: randomPhrase(),
//             reputation: 5
//         });
//         model.create({
//             firstName: randomName() + i,
//             lastName: randomName() + i,
//             favoritecardPhrase: randomPhrase(),
//             reputation: 4
//         });
//     }
// });
exports.Model = sequalizeModel;

//# sourceMappingURL=../../../source-maps/modules/cards/models/card-model.js.map
