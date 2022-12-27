import {
    ServerDayAheadData,
    Point,
    TimeInterval as SvrTimeInterval,
} from "../serverTypes";
import { HourPrice, PeriodPriceData, TimeInterval } from "../clientTypes";

const HOUR_IN_MS = 60 * 60 * 1000;
const HOUR_OFFSET = -1;

const parseHourPrice = (
    timeRange: TimeInterval,
    serverPricePoint: Point
): HourPrice => {
    const hourInMs =
        timeRange.start.getTime() +
        // eslint-disable-next-line radix
        (parseInt(serverPricePoint.position[0]) + HOUR_OFFSET) * HOUR_IN_MS;

    const hour = new Date(hourInMs);

    const priceFloat = parseFloat(serverPricePoint["price.amount"][0]);

    const hourPriceObj = { start: hour, price: priceFloat };
    return hourPriceObj;
};

const parseHourPriceArray = (
    timeRange: TimeInterval,
    serverPricePoints: Point[]
): HourPrice[] => {
    const result: HourPrice[] = [];
    serverPricePoints.forEach((point) => {
        result.push(parseHourPrice(timeRange, point));
    });
    return result;
};

const parseTimeInterval = (serverInterval: SvrTimeInterval): TimeInterval => {
    const { start, end } = serverInterval;
    const startString = start[0];
    const endString = end[0];
    const result: TimeInterval = {
        start: new Date(startString),
        end: new Date(endString),
    };
    return result;
};

const parseFetchedData = (serverData: ServerDayAheadData): PeriodPriceData => {
    const creationTime = new Date(
        serverData.Publication_MarketDocument.createdDateTime[0]
    );
    const timeRange = parseTimeInterval(
        serverData.Publication_MarketDocument["period.timeInterval"][0]
    );
    const prices = parseHourPriceArray(
        timeRange,
        serverData.Publication_MarketDocument.TimeSeries[0].Period[0].Point
    );

    return { creationTime, timeRange, prices };
};

export default parseFetchedData;
