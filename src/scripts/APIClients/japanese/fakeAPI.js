const API_URL = 'https://api.noopschallenge.com/wordbot';
const API_URL_COUNT = 'https://api.noopschallenge.com/wordbot?count=';

const ERROR_MSG = 'API call failed';

class FakeAPI {
  getFullSet() {
    const dictionary = new RōmajiDictionary();
    let words = dictionary.get();

    const promise = new Promise((resolve, reject) => {
      resolve(words);
    });

    return promise;
  }
}
