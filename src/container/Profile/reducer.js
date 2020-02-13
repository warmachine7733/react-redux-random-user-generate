import { STORE_RANDOM_PROFILE } from "./constants";

const initialState = {
  profilepageData: "",
  randomProfile: ""
};

export const Profile = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RANDOM_PROFILE:
      return { ...state, randomProfile: action.payload };
    default:
      return state;
  }
};
