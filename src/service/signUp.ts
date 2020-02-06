import {BASE_URL} from "../config/config";
import {User} from "../models/user";

export const regUser: (userData: User) => Promise<User> = async (userData) => {
  let response: Response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');
  console.log(response.json());
  return await response.json()
};
