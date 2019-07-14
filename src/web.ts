import { WebPlugin } from '@capacitor/core';
import { FacebookApiPluginPlugin, MeResponse } from './definitions';

export class FacebookApiPluginWeb extends WebPlugin implements FacebookApiPluginPlugin {
  constructor() {
    super({
      name: 'FacebookApiPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async me(options: { fields: string[] }): Promise<MeResponse> {
    console.log('web calling  me with', options);
    return {
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      picture: {
        width: 0,
        height: 0,
        url: 'string',
        isSilhouette: false
      }
    };
  }
}

const FacebookApiPlugin = new FacebookApiPluginWeb();

export { FacebookApiPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FacebookApiPlugin);
