import { Op } from 'sequelize';

const measurements = ({ database }) => {
  const endpoint = async (req, res) => {
    const { sensors } = req.body;

    try {
      let results;

      if (sensors) {
        results = await database.models.Sensors.findAll({
          where: {
            sensor: {
              [Op.in]: sensors,
            },
          },
        });
      } else {
        results = await database.models.Sensors.findAll();
      }

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
