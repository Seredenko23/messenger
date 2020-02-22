import { BASE_URL } from "../config/config";
import { Thread } from "../models/Thread";

export async function getThreadByUserId(userId: string): Promise<Thread[]> {
  let response: Response = await fetch(`${BASE_URL}/api/thread/${userId}`);

  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

  return await response.json()
}

export async function createThread(currentUserId: string, userId: string): Promise<Thread> {
  let response: Response = await fetch(`${BASE_URL}/api/thread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({currentUser: currentUserId, user: userId}),
  });

  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

  return await response.json()
}

export async function deleteThread(threadId: string): Promise<void> {
  let response: Response = await fetch(`${BASE_URL}/api/thread/${threadId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');
}
