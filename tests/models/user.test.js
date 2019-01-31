const model = require('./../../models');

describe('database', () => {
  beforeAll(async () => {
    await model.User.truncate();
  });
  afterAll(() => {
    model.sequelize.close();
  });
  it('method generate: should create two entry in table', async () => {
    await model.User.generate('Pulkit', 123243, 'Agarwal');
    await model.User.generate('Rocky', 1289, 'Bird');
    expect(await model.User.count()).toEqual(2);
  });
  it('method generate: should create one entry with id: 3432', async () => {
    await model.User.generate('Fire', 3432, 'Bird');
    expect(await model.User.count({
      where: {
        fmno: '3432',
      },
    })).toEqual(1);
    expect(await model.User.count()).toEqual(3);
  });
});
