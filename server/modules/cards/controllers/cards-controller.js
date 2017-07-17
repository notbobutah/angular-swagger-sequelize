"use strict";
var express = require('express');
var cardsService = require('../services/cards-service');
var router = express.Router();
var service = new cardsService();
/**
 * @swagger
 * definitions:
 *   card:
 *     properties:
 *       name:
 *         type: string
 *       suit:
 *         type: string
 *       description:
 *         type: string
 *       value:
 *         type: string
 *       color:
 *         type: integer
 *       size:
 *         type: integer
 *       reputation:
 *         type: float
*/
/**
 * @swagger
 * /api/card:
 *   get:
 *     tags:
 *       - card
 *     description: Returns all cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of cards
 *         schema:
 *           $ref: '#/definitions/card'
 */
router.get('/list', function (req, res) {
    service.getList(req.query.searchValue).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
/**
 * @swagger
 * /api/card:
 *   get:
 *     tags:
 *       - card
 *     description: Returns all cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of cards
 *         schema:
 *           $ref: '#/definitions/card'
 */

router.get('/one', function (req, res) {
    var idcard = req.query.idcard;
    service.get(idcard).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
/**
 * @swagger
 * /api/card:
 *   post:
 *     tags:
 *       - card
 *     description: Returns all cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of cards
 *         schema:
 *           $ref: '#/definitions/card'
 */
router.post('/create', function (req, res) {
    var request = req.body;
    service.create(request).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
/**
 * @swagger
 * /api/card:
 *   put:
 *     tags:
 *       - card
 *     description: Returns all cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of cards
 *         schema:
 *           $ref: '#/definitions/card'
 */
router.put('/update', function (req, res) {
    var request = req.body;
    service.update(request).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
/**
 * @swagger
 * /api/card:
 *   delete:
 *     tags:
 *       - card
 *     description: Returns all cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of cards
 *         schema:
 *           $ref: '#/definitions/card'
 */
router.delete('/delete', function (req, res) {
    var idcard = req.query.idcard;
    service.delete(idcard).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});

module.exports = router;

//# sourceMappingURL=../../../source-maps/modules/cards/controllers/cards-controller.js.map
