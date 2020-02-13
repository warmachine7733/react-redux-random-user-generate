import axiosInstance from "../../axios/index";
import { BASE_URL } from "../../URLs";
import { STORE_RANDOM_PROFILE } from "./constants";

export const getRandomProfile = () => {
  return async dispatch => {
    try {
      const result = await axiosInstance.get(`${BASE_URL}`);
      dispatch({ type: STORE_RANDOM_PROFILE, payload: result.data.results[0] });
    } catch (error) {
      console.log("error", error);
    }
  };
};
