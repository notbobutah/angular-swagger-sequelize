import Sequelize = require('sequelize');
import userModel = require('../models/user-model');


class usersService {

    getList(searchValue: string): Promise<userModel.IuserInstance[]> {

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
                    { favoriteuserPhrase: { $iLike: `%${searchValue}%` } },
                ]
            }
        }

        return userModel.Model.findAll(findOptions);
    }

    get(iduser: number): Promise<userModel.IuserInstance> {
        return userModel.Model.findById(iduser);
    }

    create(request: App.Iuser): Promise<userModel.IuserInstance> {
        return userModel.Model.create(request);
    }

    update(request: App.Iuser): Promise<userModel.IuserInstance> {

        return <any>(userModel.Model.findById(request.iduser).then((userInstance) => {

            userInstance.firstName = request.firstName;
            userInstance.lastName = request.lastName;
            userInstance.reputation = request.reputation;

            return userInstance.save();
        }));
    }

    delete(iduser: number) {

        return userModel.Model.findById(iduser).then((userInstance) => {

            return userInstance.destroy();

        });
    }

}

export = usersService;
