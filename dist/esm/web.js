var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class FacebookApiPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'FacebookApiPlugin',
            platforms: ['web']
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ECHO', options);
            return options;
        });
    }
    me(options) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
const FacebookApiPlugin = new FacebookApiPluginWeb();
export { FacebookApiPlugin };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FacebookApiPlugin);
//# sourceMappingURL=web.js.map