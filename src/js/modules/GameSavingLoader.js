import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then(
        (data) => JSON.parse(data),
        (error) => new Error(error)
      );
  }
}
