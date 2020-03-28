import { User } from "../models/user";
import { BASE_URL } from "../config/config";
import { DTO } from "./model/dto";

export async function logIn(user: User): Promise<DTO<User>> {
  let response: Response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if(response.status >= 400 && response.status <= 600) throw Error(await response.json());
  const tokens = {
    accessToken: response.headers.get('access-token'),
    refreshToken: response.headers.get('refresh-token')
  };
  return {
    tokens: tokens,
    response: await response.json()
  }
}
