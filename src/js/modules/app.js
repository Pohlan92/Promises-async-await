import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then (result => console.log(result, typeof result))

(async () => {
  try {
    const result = await GameSavingLoader.load()
    
    return JSON.parse(result)
  } 
  catch (error) {
    console.error(error)
  }
})()