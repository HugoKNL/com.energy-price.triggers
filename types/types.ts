"use strict";

import OneToHundred from "./oneToHundred";

import Country from "./supportedCountries";

type DeviceType = "hourly" | "cyclic";

// Device types
export type PoweredDevice = {
    type: DeviceType;
    powerUsage: number;
};

export interface PoweredCar extends PoweredDevice {
    currentSoc: OneToHundred;
}

// Device states
type DeviceServiceState<T extends PoweredDevice> = {
    isOn: boolean;
    device: T;
    dateTimeReady: Date;
};

export interface PoweredCarServiceState extends DeviceServiceState<PoweredCar> {
    desiredSoc: OneToHundred;
    chargeOver100: boolean;
}

// Global state
export interface AppState {
    deviceStates: DeviceServiceState<PoweredDevice>;
    country: Country;
}

const testCar: PoweredCar = {
    type: "hourly",
    powerUsage: 3000,
    currentSoc: 20,
};

const state: PoweredCarServiceState = {
    isOn: true,
    device: testCar,
    desiredSoc: 0,
    chargeOver100: false,
    dateTimeReady: new Date(),
};

console.log(state);
