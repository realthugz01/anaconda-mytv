
package com.anaconda.mytv;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.provider.Settings;
import java.security.MessageDigest;

@CapacitorPlugin(name = "DeviceId")
public class DeviceIdPlugin extends Plugin {

    @PluginMethod
    public void getDeviceId(PluginCall call) {
        try {
            String androidId = Settings.Secure.getString(getContext().getContentResolver(), Settings.Secure.ANDROID_ID);
            if (androidId == null) androidId = "A1B2C3D4E5F6";

            // Create MAC from last 6 hex chars of androidId
            String hex = androidId.toUpperCase().replaceAll("[^0-9A-F]", "");
            if (hex.length() < 6) {
                // hash it to get hex
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte[] digest = md.digest(androidId.getBytes());
                StringBuilder sb = new StringBuilder();
                for (byte b : digest) sb.append(String.format("%02X", b));
                hex = sb.toString();
            }
            String last6 = hex.substring(hex.length() - 6);
            String mac = "00:1A:79:" + last6.substring(0,2) + ":" + last6.substring(2,4) + ":" + last6.substring(4,6);

            JSObject ret = new JSObject();
            ret.put("androidId", androidId);
            ret.put("last6", last6);
            ret.put("mac", mac);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject(e.getMessage());
        }
    }
}
