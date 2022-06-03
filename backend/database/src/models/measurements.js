import { DataTypes } from 'sequelize';

const measurements = ({ sequelize }) => {
  const Measurements = sequelize.define('measurements', {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    node: {
      type: DataTypes.UUID,
      references: {
        model: 'nodes',
        key: 'id',
      },
    },
    sensor: {
      type: DataTypes.UUID,
      references: {
        model: 'sensors',
        key: 'id',
      },
    },
    timestamp: DataTypes.DATE,
    value: DataTypes.DECIMAL(8, 2),
  }, {
    sequelize,
    timestamps: true,
    modelName: 'measurements',
  });

  return Measurements;
};

export default measurements;
