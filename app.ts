import Homey from "homey";

class MyApp extends Homey.App {
    /**
     * onInit is called when the app is initialized.
     */
    onInit = async () => {
        this.log("MyApp has been initialized");
    };
}

module.exports = MyApp;
