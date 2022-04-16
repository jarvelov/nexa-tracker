import { DataTypes } from 'sequelize';

const sensors = ({ sequelize }) => {
  const Sensors = sequelize.define('sensors', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    timestamps: true,
    modelName: 'sensors',
  });

  return Sensors;
};

export default sensors;
