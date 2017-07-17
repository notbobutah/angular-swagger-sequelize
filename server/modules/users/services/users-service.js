"use strict";
var userModel = require('../models/user-model');
var usersService = (function () {
    function usersService() {
    }
    usersService.prototype.getList = function (searchValue) {
        var findOptions = {
            order: [
                'name'
            ]
        };
        if (searchValue) {
            findOptions.where = {
                $or: [
                    { firstName: { $iLike: "%" + searchValue + "%" } },
                    { lastName: { $iLike: "%" + searchValue + "%" } },
                    { favoriteuserPhrase: { $iLike: "%" + searchValue + "%" } },
                ]
            };
        }
        return userModel.Model.findAll(findOptions);
    };
    usersService.prototype.get = function (iduser) {
        return userModel.Model.findById(iduser);
    };
    usersService.prototype.create = function (request) {
        return userModel.Model.create(request);
    };
    usersService.prototype.update = function (request) {
        return (userModel.Model.findById(request.iduser).then(function (userInstance) {
            userInstance.firstName = request.firstName;
            userInstance.lastName = request.lastName;
            userInstance.reputation = request.reputation;
            return userInstance.save();
        }));
    };
    usersService.prototype.delete = function (iduser) {
        return userModel.Model.findById(iduser).then(function (userInstance) {
            return userInstance.destroy();
        });
    };
    return usersService;
}());
module.exports = usersService;

//# sourceMappingURL=../../../source-maps/modules/users/services/users-service.js.map
