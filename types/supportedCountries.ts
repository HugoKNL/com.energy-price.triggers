"use strict";

export enum CountryMap {
    "nl" = "Nederland",
}

export type Country = keyof typeof CountryMap;

export default Country;
