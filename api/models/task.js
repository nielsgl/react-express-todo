module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		'Task',
		{
			title: { type: DataTypes.STRING, allowNull: false },
			is_done: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{ underscored: true },
	);

	Task.associate = models => {
		models.Task.belongsTo(models.User, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false,
			},
		});
	};

	// // console.log('Task type', typeof Task);
	// // console.log('Task ', Task);
	// // // console.log('Task properties', Object.getOwnPropertyNames(Task.prototype));
	// // console.log(
	// // 	'sequelize Model properties',
	// // 	Object.getOwnPropertyNames(sequelize.Model),
	// // );
	// Task.hasPaperTrail = sequelize.Model.hasPaperTrail;

	// // console.log('Task.hasPaperTrail', Task.hasPaperTrail);
	// Task.hasPaperTrail();

	return Task;
};
