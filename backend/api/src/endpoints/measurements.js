import { Op } from 'sequelize';
import moment from 'moment';

const measurements = ({ database }) => {
  const endpoint = async (req, res) => {
    const { dateFrom, dateTo, sensors, nodes } = req.body;

    try {
      const results = await database.models.Measurements.findAll({
        where: {
          createdAt: {
            [Op.gte]: moment.utc(dateFrom).toDate(),
            [Op.lte]: moment.utc(dateTo).toDate(),
          },
          sensor: {
            [Op.in]: sensors,
          },
          node: {
            [Op.in]: nodes,
          },
        },
      });

      res.status(200);

      return res.json({
        status: 'success',
        results,
      });
    } catch (error) {
      console.error(error);
      res.status(500);
      return res.json({
        status: 'error',
        error,
      });
    }
  };

  return endpoint;
};

export default measurements;
