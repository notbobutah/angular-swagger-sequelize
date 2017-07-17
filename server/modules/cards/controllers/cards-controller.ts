import express = require('express');
import swaggerJSDoc = requrie('swagger-jsdoc');
import cardsService = require('../services/cards-service');

var router = express.Router();
var service = new cardsService();
/**
 * @swagger
 * definition:
 *   card:
 *     properties:
 *       name:
 *         type: string
 *       suit:
 *         type: string
 *       value:
 *         type: integer
 *       color:
 *         type: string
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
router.get('/list', (req, res) => {

    service.getList(req.query.searchValue).then((result) => {
        res.send(result);
    }).catch((error) => {
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
router.get('/one', (req, res) => {

    var idcard = <number>req.query.idcard;

    service.get(idcard).then((result) => {
        res.send(result);
    }).catch((error) => {
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
router.post('/create', (req, res) => {

    var request = <App.Icard>req.body;

    service.create(request).then((result) => {
        res.send(result);
    }).catch((error) => {
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
router.put('/update', (req, res) => {

    var request = <App.Icard>req.body;

    service.update(request).then((result) => {
        res.send(result);
    }).catch((error) => {
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
router.delete('/delete', (req, res) => {

    var idcard = <number>req.query.idcard;

    service.delete(idcard).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});


export = router;
