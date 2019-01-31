const model = require('./../../models');

describe('database', () => {
  beforeAll(async () => {
    await model.Person.truncate();
  });
  afterAll(() => {
    model.sequelize.close();
  });
  it('method generate: should create two entry in table', async () => {
    await model.Person.generate('Pulkit', 'Agarwal', 123243);
    await model.Person.generate('Rocky', 'Tiger', 1289);
    expect(await model.Person.count()).toEqual(2);
  });
  it('method generate: should create one entry with id: 3432', async () => {
    await model.Person.generate('Fire', 'Bird', 3432);
    expect(await model.Person.count({
      where: {
        email: '3432',
      },
    })).toEqual(1);
    expect(await model.Person.count()).toEqual(3);
  });
});
