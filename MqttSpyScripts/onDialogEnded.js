// Wrap the script in a method, so that you can do "return false;" in case of an error or stop request
function publish()
{
        mqttspy.publish("hermes/hotword/toggleOn", "{\"siteId\":\"default\"}", 0, false);

        // This means all OK, script has completed without any issues and as expected
        return true;
}

publish();