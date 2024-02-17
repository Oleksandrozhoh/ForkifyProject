import 'regenerator-runtime/runtime';
import configData from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const response = await Promise.race([
      fetch(url),
      timeout(configData.TIMEOUT_SEC),
    ]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message}(${response.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
