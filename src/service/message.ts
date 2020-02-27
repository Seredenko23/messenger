import {BASE_URL} from "../config/config";
import {Message} from "../models/messages";

export async function getMessageByThreadId(threadId: string): Promise<Message> {
  let response: Response = await fetch(`${BASE_URL}/message/${threadId}`);

  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

  return await response.json()
}
