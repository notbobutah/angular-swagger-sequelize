"use strict";
var express = require('express');
var usersService = require('../services/users-service');
var router = express.Router();
var service = new usersService();
/**
 * @swagger
 * definition:
 *   user:
 *     properties:
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       username:
 *         type: string
 *       email:
 *         type: string
 *       phone:
 *         type: string
 *       address:
 *         type: string
 *       reputatoin:
 *         type: integer
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
router.get('/list', function (req, res) {
    service.getList(req.query.searchValue).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     description: Returns a  user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: returns a single user
 *         schema:
 *           $ref: '#/definitions/user'
 */

router.get('/one', function (req, res) {
    var iduser = req.query.iduser;
    service.get(iduser).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
/**
 * @swagger
 * /api/user:
 *   post:
 *     tags:
 *       - user
 *     description: Create a new user
 *     parameters:
 *         - name: user
 *           in: body
 *           description: CoreValue to be created
 *           required: true
 *           schema:
 *             $ref: '#/definitions/user'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Create a new user
 *         schema:
 *           $ref: '#/definitions/user'
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
 * /api/user:
 *   put:
 *     tags:
 *       - user
 *     description: Update a user
 *     parameters:
 *         - name: user
 *           in: body
 *           description: CoreValue to be created
 *           required: true
 *           schema:
 *             $ref: '#/definitions/user'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: update a user
 *         schema:
 *           $ref: '#/definitions/user'
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
 * /api/user:
 *   delete:
 *     tags:
 *       - user
 *     description: delete a user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: delete a user
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.delete('/delete', function (req, res) {
    var iduser = req.query.iduser;
    service.delete(iduser).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});

module.exports = router;

//# sourceMappingURL=../../../source-maps/modules/users/controllers/users-controller.js.map
