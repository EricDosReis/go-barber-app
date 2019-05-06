

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('appointments', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    user_id: {
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      type: Sequelize.INTEGER,
    },
    provider_id: {
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      type: Sequelize.INTEGER,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('appointments'),
};
