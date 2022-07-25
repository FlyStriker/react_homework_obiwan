async function fetchData(url) {
  const data = await fetch(url);
  const dataJSON = await data.json();
  const resultJSON = {};
  for (const objectItem of Object.entries(dataJSON)) {
    if (!Array.isArray(objectItem[1])) {
      resultJSON[objectItem[0]] = objectItem[1];
    } else {
      const requests = objectItem[1].map(async (url) => {
        const res = await fetch(url);
        return res;
      });
      const responses = await Promise.all(requests);
      const json = await Promise.all(responses.map((result) => result.json()));
      resultJSON[objectItem[0]] = json;
    }
  }

  return resultJSON;
}

export default fetchData;
