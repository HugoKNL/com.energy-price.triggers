import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";
import parseFetchedData from "./utils/parseHourPrice";
import { PeriodPriceData } from "./clientTypes";
import parseApiDateString from "./utils/formatDateApiInput";

export default class Fetcher {
    private apiToken: string;
    private countryCode: string;

    constructor(apiToken: string, countryCode: string) {
        this.apiToken = apiToken;
        this.countryCode = countryCode;
    }

    public fetchData = async (
        startDate: Date,
        endDate: Date
    ): Promise<PeriodPriceData | Error> => {
        const startDateString = parseApiDateString(startDate);
        const endDateString = parseApiDateString(endDate);
        let result;
        try {
            const url = `https://transparency.entsoe.eu/api?securityToken=${this.apiToken}&documentType=A44&in_Domain=${this.countryCode}&out_Domain=${this.countryCode}&periodStart=${startDateString}&periodEnd=${endDateString}`;
            const response = await fetch(url);
            const content = await response.text();
            const json = await parseStringPromise(content);
            result = parseFetchedData(json);
        } catch (error) {
            return error as Error;
        }
        return result;
    };
}
