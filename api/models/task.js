module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		title: DataTypes.STRING,
	});

	Task.associate = function(models) {
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
