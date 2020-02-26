import  {BASE_URL} from "../config/config";
import {Message} from "../models/messages";

export async function createMessage(threadId:string, messageBody:string): Promise<Message> {
    let response: Response = await fetch(`${BASE_URL}/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({thread: threadId, message: messageBody}),
    });

    if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

    return await response.json()
}

export async function getMessageByThreadId(threadId:string): Promise<Message> {
    let response: Response = await fetch(`${BASE_URL}/message/${threadId}`);

    if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

    return await response.json()
}
export async function deleteMessage(_id: string): Promise<void> {
    let response: Response = await fetch(`${BASE_URL}/message/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}