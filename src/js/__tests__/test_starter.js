import starter from '../modules/app.js';
import GameSavingLoader from '../modules/GameSavingLoader.js';

jest.setTimeout(10000)
test ('async function loader', async (done) => {
  const data = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}
  const result = await GameSavingLoader.load();
 
  expect(result).toEqual(data);
      done();
})
   





