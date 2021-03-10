/* types */
import { ClientOptions } from '../types/ClientOptions';
import { Payload } from '../types/Payload';

import { createClient } from '../utils/RequestHandler';
import { HookError } from '../utils/ErrorHandler';
import axios from 'axios';

export class HookClient {
  private _token: string;

  public constructor(options: ClientOptions) {
    this._token = options.token;
  }

 public send(originalPayload?: Payload): Promise<any> {
   if(!this._token) throw new HookError('Cannot send a webhook without a token');

   if(!originalPayload) throw new HookError('Cannot send a empty webhook!');
   
   const payload: object = {
     username: originalPayload.username ? originalPayload.username : 'Hook.gg',
     avatar_url: originalPayload.avatar_url ? originalPayload.avatar_url : '',
     content: originalPayload.content ? originalPayload.content : '',
     tts: originalPayload ? originalPayload.tts : false,
     embeds: originalPayload && typeof originalPayload === 'object' && originalPayload.embed ? [originalPayload.embed] : ''
   }

    return new Promise((resolve, reject) => {
      this._post(payload)
      .then(res => resolve(res.data))
      .catch(e => reject(e));
    });

  }

 private async _post(payload: Payload): Promise<any> {
    const client = createClient();

    let creds = await this.getDetails(this._token);

    return new Promise((resolve, reject) => {
      client.post(`/webhooks/${creds.id}/${creds.token}`, payload)      
      .then(res => resolve(res.data))
      .catch(e => reject(e));
    });
  }

  public getDetails(token: string): Promise<any> {
    return axios.get(token)
      .then(res => res.data)
  }
}