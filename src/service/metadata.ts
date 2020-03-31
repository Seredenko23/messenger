import  {BASE_URL} from "../config/config";

export const extractMetadataFromUrl = async (url: string): Promise<any> => {
  const response: Response = await fetch(`${BASE_URL}/url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token') as string
    },
    body: JSON.stringify({url: url}),
  })

  if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

  return await response.json()
}
