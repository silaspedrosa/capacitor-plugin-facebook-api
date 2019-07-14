declare module "@capacitor/core" {
    interface PluginRegistry {
        FacebookApiPlugin: FacebookApiPluginPlugin;
    }
}
export interface FacebookReponse {
    error?: string;
}
export interface MeResponse extends FacebookReponse {
    email: string;
    firstName: string;
    lastName: string;
    picture: {
        width: number;
        height: number;
        url: string;
        isSilhouette: boolean;
    };
}
export interface FacebookApiPluginPlugin {
    me(options: {
        fields: string[];
    }): Promise<MeResponse>;
}
