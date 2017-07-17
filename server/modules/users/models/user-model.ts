import dbConnection = require('../../../core/db-connection');
import Sequelize = require('sequelize');

var db = dbConnection();


export interface IuserInstance extends Sequelize.Instance<IuserInstance, App.Iuser>, App.Iuser { }
export interface IuserModel extends Sequelize.Model<IuserInstance, App.Iuser> { }


var sequalizeModel = db.define<IuserInstance, App.Iuser>('user', <any>{
    iduser: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
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
    favoriteuserPhrase: {
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
        userPhrases = ['Such Wow Angular2', 'Amaz app with Typescript', 'Much NodeJs', 'Such amaze Sequalize ORM', 'Such wow PostgreSQL'],
        randomName = () => {
            return names[Math.floor(Math.random() * names.length)];
        },
        randomPhrase = () => {
            return userPhrases[Math.floor(Math.random() * userPhrases.length)];
        };


    for (var i = 0; i < 20; i++) {

        model.create({
            firstName: randomName()+i,
            lastName: randomName()+i,
            favoriteuserPhrase: randomPhrase(),
            reputation: 5
        });

        model.create({
            firstName: randomName()+i,
            lastName: randomName()+i,
            favoriteuserPhrase: randomPhrase(),
            reputation: 4
        });
    }

});

export var Model = sequalizeModel;
