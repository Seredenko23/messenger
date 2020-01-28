export interface IWebsocketConnect {
  type: string;
  payload: {
    url: string
  }
}

export type WebsocketAction = IWebsocketConnect;
