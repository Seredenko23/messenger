import {BASE_URL} from "../config/config";
import {User} from "../models/user";

export async function regUser(userData: User): Promise<User> {
  let response: Response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if(response.status >= 400 && response.status <= 600) throw Error(await response.json());
  return await response.json()
};
