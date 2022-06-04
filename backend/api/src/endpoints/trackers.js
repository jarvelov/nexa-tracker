import { Op } from 'sequelize';

const measurements = ({ database }) => {
  const endpoint = async (req, res) => {
    const { trackers } = req.body;

    try {
      let results;

      if (trackers) {
        results = await database.models.Trackers.findAll({
          where: {
            sensor: {
              [Op.in]: trackers,
            },
          },
        });
      } else {
        results = await database.models.Trackers.findAll();
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
