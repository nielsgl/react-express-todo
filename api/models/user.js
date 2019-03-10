module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: DataTypes.STRING,
		},
		{ underscored: true },
	);

	User.associate = models => {
		models.User.hasMany(models.Task);
	};

	return User;
};
