package com.korisama.carcontroller

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import java.net.Socket

class TcpClientModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactContext = reactContext;
    private var client: Socket? = null;
    override fun getName() = "TcpClientModule"
    private fun sendEvent(eventName: String) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(eventName, null)
    }

    @ReactMethod
    fun connect(ip: String, port: String) {
        Log.d("address", "$ip:$port")
        try {
            client = Socket(ip, port.toInt())
        } catch (e: Exception) {
            e.printStackTrace()
        }

        if (client?.isConnected == true) {
            sendEvent("onConnect")
        }
    }

    @ReactMethod
    fun send(msg: String) {
        Log.d("msg", msg)
        client?.let { socket ->
            try {
                val outputStream = socket.getOutputStream()
                val messageBytes = msg.toByteArray()
                outputStream.write(messageBytes)
                outputStream.flush()
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}