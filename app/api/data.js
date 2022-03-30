import client from "./client";

const endPoint =
  "/data/2.5/onecall?lat=35&lon=139&exclude=minutely&appid=4e1d8335a112182c1153e998e8ccf501";

const getData = () => client.get(endPoint);

export default {
  getData,
};
