export enum CountryMap {
    "nl" = "Nederland",
}

type Country = keyof typeof CountryMap;

export default Country;
