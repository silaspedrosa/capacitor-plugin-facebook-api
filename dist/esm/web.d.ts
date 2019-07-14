import { WebPlugin } from '@capacitor/core';
import { FacebookApiPluginPlugin, MeResponse } from './definitions';
export declare class FacebookApiPluginWeb extends WebPlugin implements FacebookApiPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    me(options: {
        fields: string[];
    }): Promise<MeResponse>;
}
declare const FacebookApiPlugin: FacebookApiPluginWeb;
export { FacebookApiPlugin };
