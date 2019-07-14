package com.silaspedrosa.capacitorfacebookapi;

import android.util.Log;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class FacebookApiPlugin extends Plugin {

    @PluginMethod()
    public void me(PluginCall call) {
        JSArray fields = call.getArray("fields", new JSArray());
        Log.d("[FacebookApiPlugin][me]", fields.toString());

        JSObject response = new JSObject();
        response.put("email", "silaspedrosa@gmail.com");
        response.put("firstName", "silas");
        response.put("lastName", "pedrosa");

        JSObject picture = new JSObject();
        picture.put("width", 200);
        picture.put("height", 200);
        picture.put("url", "https://google.com");
        picture.put("isSilhouette", false);

        response.put("picture", picture);

        call.success(response);
    }
}
