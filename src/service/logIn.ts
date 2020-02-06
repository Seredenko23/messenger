import { User } from "../models/user";
import {BASE_URL} from "../config/config";

export async function logIn(user: User): Promise<User> {
  let response: Response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log()
  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');
  return response.json()
}
