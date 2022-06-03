import { DataTypes } from 'sequelize';

const nodes = ({ sequelize }) => {
  const Nodes = sequelize.define('nodes', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.TEXT,
    nexaId: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: true,
    modelName: 'nodes',
  });

  return Nodes;
};

export default nodes;
