import dbConnection = require('../../../core/db-connection');
import Sequelize = require('sequelize');

var db = dbConnection();


export interface IcardInstance extends Sequelize.Instance<IcardInstance, App.Icard>, App.Icard { }
export interface IcardModel extends Sequelize.Model<IcardInstance, App.Icard> { }


var sequalizeModel = db.define<IcardInstance, App.Icard>('card', <any>{
    idcard: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    favoritecardPhrase: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    reputation: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
});

sequalizeModel.sync({ force: true }).then((model) => {

    var names = ['Bailey', 'Lucy', 'Charlie', 'Rocky', 'Cooper', 'Sam', 'Zeus'],
        cardPhrases = ['Such Wow Angular2', 'Amaz app with Typescript', 'Much NodeJs', 'Such amaze Sequalize ORM', 'Such wow PostgreSQL'],
        randomName = () => {
            return names[Math.floor(Math.random() * names.length)];
        },
        randomPhrase = () => {
            return cardPhrases[Math.floor(Math.random() * cardPhrases.length)];
        };


    for (var i = 0; i < 20; i++) {

        model.create({
            firstName: randomName()+i,
            lastName: randomName()+i,
            favoritecardPhrase: randomPhrase(),
            reputation: 5
        });

        model.create({
            firstName: randomName()+i,
            lastName: randomName()+i,
            favoritecardPhrase: randomPhrase(),
            reputation: 4
        });
    }

});

export var Model = sequalizeModel;
