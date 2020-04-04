import {FileReq} from "../service/utilities";

export interface MessageBody {
  body: string | Blob | FileReq;
  type: string;
}
