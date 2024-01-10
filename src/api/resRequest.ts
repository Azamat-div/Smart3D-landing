/* eslint-disable consistent-return */
const HOST_URI_API = "https://node49700-env-3541556.jcloud.kz/api/";

const batchList = new Set();

const resRequest = async function (objParams: any, batch = ""): Promise<any> {
  const url = HOST_URI_API;

  if (batch) {
    if (batchList.has(batch)) {
      return;
    }
    batchList.add(batch);
  }

  try {
    const header = {
      "Content-Type": "application/json;charset=UTF-8",
      Token: "DEMO",
    };
    const response = await fetch(url, {
      method: "POST",
      headers: header,
      body: JSON.stringify(objParams),
    });

    batchList.delete(batch);

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    }
    const data = await response.text();
    throw new Error(data);
  } catch (error) {
    console.log("Something wrong", error);
    console.log("[API]", `${objParams.action}\n${error}`);
  }
};
export default resRequest;
