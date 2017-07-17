"use strict";
var cardModel = require('../models/card-model');
var cardsService = (function () {
    function cardsService() {
    }
    cardsService.prototype.getList = function (searchValue) {
        var findOptions = {
            order: [
                'name'
            ]
        };
        if (searchValue) {
            findOptions.where = {
                $or: [
                    { same: { $iLike: "%" + searchValue + "%" } },
                    { suit: { $iLike: "%" + searchValue + "%" } },
                    { description: { $iLike: "%" + searchValue + "%" } },
                ]
            };
        }
        return cardModel.Model.findAll(findOptions);
    };
    cardsService.prototype.get = function (idcard) {
        return cardModel.Model.findById(idcard);
    };
    cardsService.prototype.create = function (request) {
        return cardModel.Model.create(request);
    };
    cardsService.prototype.update = function (request) {
        return (cardModel.Model.findById(request.idcard).then(function (cardInstance) {
            cardInstance.firstName = request.firstName;
            cardInstance.lastName = request.lastName;
            cardInstance.reputation = request.reputation;
            return cardInstance.save();
        }));
    };
    cardsService.prototype.delete = function (idcard) {
        return cardModel.Model.findById(idcard).then(function (cardInstance) {
            return cardInstance.destroy();
        });
    };
    return cardsService;
}());
module.exports = cardsService;

//# sourceMappingURL=../../../source-maps/modules/cards/services/cards-service.js.map
