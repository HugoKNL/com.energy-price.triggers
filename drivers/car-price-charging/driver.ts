import { randomUUID } from "crypto";

import Homey from "homey";

class MyDriver extends Homey.Driver {
    /**
     * onInit is called when the driver is initialized.
     */
    onInit = async () => {
        this.log("MyDriver has been initialized");
    };

    /**
     * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
     * This should return an array with the data of devices that are available for pairing.
     */
    onPairListDevices = async () => {
        return [
            // Example device data, note that `store` is optional
            {
                name: "Car",
                data: {
                    id: randomUUID(),
                },
            },
        ];
    };
}

module.exports = MyDriver;
