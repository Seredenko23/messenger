import {BASE_URL} from "../config/config";
import {UserSignUp} from "../models/userSignUp";

// TODO create signUp user model

export const regUser: (userData) => Promise<UserSignUp[]> = async (userData) => {
  let response: Response = await fetch(BASE_URL);
  if(response.status >= 400 || response.status <= 600) throw Error('Bad response');
  let formattedResponse: [] = await response.json();
  return formattedResponse;
};
