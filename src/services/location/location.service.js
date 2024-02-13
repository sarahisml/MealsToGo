import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      reject("not found");
    }
    resolve(location);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  //geometry is the 1st value in result(s) array in location.mock
  //it is an object because it has 2 values, lat and lng
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
