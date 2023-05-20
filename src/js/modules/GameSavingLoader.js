import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(result => json(result), 
            error => new Error(error)
      )
      .then(data => JSON.parse(data),
            error => new Error(error) 
      )

      .catch(error => console.error(error)) 
   
  }
}