import Sequelize = require('sequelize');
import cardModel = require('../models/card-model');


class cardsService {

    getList(searchValue: string): Promise<cardModel.IcardInstance[]> {

        var findOptions: Sequelize.FindOptions = {
            order: [
                'reputation'
            ]
        };

        if (searchValue) {
            findOptions.where = {
                $or: [
                    { firstName: { $iLike: `%${searchValue}%` } },
                    { lastName: { $iLike: `%${searchValue}%` } },
                    { favoritecardPhrase: { $iLike: `%${searchValue}%` } },
                ]
            }
        }

        return cardModel.Model.findAll(findOptions);
    }

    get(idcard: number): Promise<cardModel.IcardInstance> {
        return cardModel.Model.findById(idcard);
    }

    create(request: App.Icard): Promise<cardModel.IcardInstance> {
        return cardModel.Model.create(request);
    }

    update(request: App.Icard): Promise<cardModel.IcardInstance> {

        return <any>(cardModel.Model.findById(request.idcard).then((cardInstance) => {

            cardInstance.firstName = request.firstName;
            cardInstance.lastName = request.lastName;
            cardInstance.reputation = request.reputation;

            return cardInstance.save();
        }));
    }

    delete(idcard: number) {

        return cardModel.Model.findById(idcard).then((cardInstance) => {

            return cardInstance.destroy();

        });
    }

}

export = cardsService;
