import express = require('express');
import swaggerJSDoc = requrie('swagger-jsdoc');
import usersService = require('../services/users-service');

var router = express.Router();
var service = new usersService();
/**
 * @swagger
 * definition:
 *   user:
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
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/user'
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
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.get('/one', (req, res) => {

    var iduser = <number>req.query.iduser;

    service.get(iduser).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.post('/create', (req, res) => {

    var request = <App.Iuser>req.body;

    service.create(request).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.put('/update', (req, res) => {

    var request = <App.Iuser>req.body;

    service.update(request).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.delete('/delete', (req, res) => {

    var iduser = <number>req.query.iduser;

    service.delete(iduser).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});


export = router;
