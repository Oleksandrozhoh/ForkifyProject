import 'regenerator-runtime/runtime';
import configData from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// export const getJSON = async function (url) {
//   try {
//     const response = await Promise.race([
//       fetch(url),
//       timeout(configData.TIMEOUT_SEC),
//     ]);
//     const data = await response.json();
//     if (!response.ok) throw new Error(`${data.message}(${response.status})`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

// export const sendJSON = async function (url, uploadData) {
//   try {
//     const response = await Promise.race([
//       fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(uploadData),
//       }),
//       timeout(configData.TIMEOUT_SEC),
//     ]);
//     const data = await response.json();
//     if (!response.ok) throw new Error(`${data.message}(${response.status})`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const response = await Promise.race([
      fetchPro,
      timeout(configData.TIMEOUT_SEC),
    ]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message}(${response.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
