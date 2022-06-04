import { Op } from 'sequelize';

const measurements = ({ database }) => {
  const endpoint = async (req, res) => {
    const { nodes } = req.body;

    try {
      let results;

      if (nodes) {
        results = await database.models.Nodes.findAll({
          where: {
            sensor: {
              [Op.in]: nodes,
            },
          },
        });
      } else {
        results = await database.models.Nodes.findAll();
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
