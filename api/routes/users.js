const express = require('express');
const debug = require('debug')('api:routes:users');

const models = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
	const users = await models.User.findAll({
		include: [models.Task],
		attributes: ['id', 'username'],
	});

	// debug('[GET /users] users: ', users);
	res.set('X-Total-Count', 1).json(users);
});

/* GET users/:id listing. */
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;

	const user = await models.User.findOne({
		where: { id },
		include: [models.Task],
		attributes: ['id', 'username'],
	});

	res.set('X-Total-Count', 1).json(user);
});

/* POST users */
router.post('/', async (req, res, next) => {
	debug('[POST /users] req.body: ', req.body);
	debug('[POST /users] req.params: ', req.params);

	const { body } = req;
	const user = await models.User.create(body);

	debug(
		'[POST /users] user: ',
		user.get({
			plain: true,
		}),
	);

	res.json(user);
});

/* PUT /users/:id */
router.put('/:id', async (req, res, next) => {
	debug('[PUT /users/id] req.body: ', req.body);
	debug('[PUT /users/id] req.params: ', req.params);

	const { body } = req;
	const { id } = req.params;
	const user = await models.User.findOne({ where: { id } });

	user.update(body).then(updated_user => {
		debug('[PUT /users/id] user.id', user.id);
		// debug('[PUT /users/id] updated_user', updated_user);

		res.status(200).json({
			id: updated_user.id,
			data: updated_user.dataValues,
			previousData: updated_user._previousDataValues,
		});
	});
});

/* DELETE /users/:id */
router.delete('/:id', async (req, res, next) => {
	debug('[DELETE /users/id] req.params:', req.params);

	const { id } = req.params;
	const user = await models.User.findOne({ where: { id } });

	// debug('[DELETE /users/id] user', user);

	user.destroy().then(() => {
		res.status(200).json({ id: user.id, previousData: user });
	});
});

module.exports = router;
