import { DataTypes } from 'sequelize';

const trackers = ({ sequelize }) => {
  const Trackers = sequelize.define('trackers', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
  }, {
    sequelize,
    timestamps: true,
    modelName: 'trackers',
  });

  return Trackers;
};

export default trackers;
