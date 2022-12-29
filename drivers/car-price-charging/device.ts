import Homey from "homey";
import Fetcher from "../../api/fetcher";
import parseApiDateString from "../../api/utils/formatDateApiInput";

class MyDevice extends Homey.Device {
    /**
     * onInit is called when the device is initialized.
     */
    onInit = async () => {
        this.log("MyDevice has been initialized");

        this.registerCapabilityListener("onoff", async (value) => {
            this.log("Turned On/Off: ", value);
            const fetcher = new Fetcher(
                Homey.env.ENTSOE_API_TOKEN,
                "10YNL----------L"
            );
            const fetchedJson = await fetcher.fetchData(
                new Date("2022-12-28T00:00:00"),
                new Date("2022-12-29T00:00:00")
            );
            this.log(parseApiDateString(new Date("2022-12-28T00:00:00")));
            const output = JSON.stringify(fetchedJson);
            this.log(output);
        });

        // this.setCapabilityValue("onoff", () => {});
    };

    /**
     * onAdded is called when the user adds the device, called just after pairing.
     */
    onAdded = async () => {
        this.log("MyDevice has been added");
    };

    /**
     * onSettings is called when the user updates the device's settings.
     * @param {object} event the onSettings event data
     * @param {object} event.oldSettings The old settings object
     * @param {object} event.newSettings The new settings object
     * @param {string[]} event.changedKeys An array of keys changed since the previous version
     * @returns {Promise<string|void>} return a custom message that will be displayed
     */
    onSettings = async ({
        oldSettings,
        newSettings,
        changedKeys,
    }: {
        oldSettings: object;
        newSettings: object;
        changedKeys: string[];
    }): Promise<string | void> => {
        this.log("MyDevice settings where changed");
    };

    /**
     * onRenamed is called when the user updates the device's name.
     * This method can be used this to synchronise the name to the device.
     * @param {string} name The new name
     */
    onRenamed = async (name: string) => {
        this.log("MyDevice was renamed");
    };

    /**
     * onDeleted is called when the user deleted the device.
     */
    onDeleted = async () => {
        this.log("MyDevice has been deleted");
    };
}

module.exports = MyDevice;
