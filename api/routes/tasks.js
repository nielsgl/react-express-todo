const express = require('express');
const debug = require('debug')('api:routes:tasks');

const models = require('../models');

const router = express.Router();

/* GET tasks listing. */
router.get('/', async (req, res, next) => {
	const tasks = await models.Task.findAll({
		include: [models.User],
		attributes: ['id', 'title', 'is_done'],
	});

	debug('[GET /tasks] tasks: ', tasks);
	res.set('X-Total-Count', tasks.length).json(tasks);
});

/* GET tasks/:id listing. */
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;

	const task = await models.Task.findOne({
		where: { id },
		include: [models.User],
		attributes: ['id', 'title', 'is_done'],
	});

	res.set('X-Total-Count', 1).json(task);
});

/* POST tasks */
router.post('/', async (req, res, next) => {
	debug('[POST /tasks] req.body: ', req.body);
	debug('[POST /tasks] req.params: ', req.params);

	const { body } = req;
	const task = await models.Task.create(body);

	debug(
		'[POST /tasks] task: ',
		task.get({
			plain: true,
		}),
	);

	res.json(task);
});

/* PUT /tasks/:id */
router.put('/:id', async (req, res, next) => {
	debug('[PUT /tasks/id] req.body: ', req.body);
	debug('[PUT /tasks/id] req.params: ', req.params);

	const { body } = req;
	const { id } = req.params;
	const task = await models.Task.findOne({ where: { id } });

	task.update(body).then(updated_task => {
		debug('[PUT /tasks/id] task.id', task.id);

		res.status(200).json({
			id: updated_task.id,
			data: updated_task.dataValues,
			previousData: updated_task._previousDataValues,
		});
	});
});

/* DELETE /tasks/:id */
router.delete('/:id', async (req, res, next) => {
	debug('[DELETE /tasks/id] req.params:', req.params);

	const { id } = req.params;
	const task = await models.Task.findOne({ where: { id } });

	task.destroy().then(() => {
		res.status(200).json({ id: task.id, previousData: task });
	});
});

module.exports = router;
