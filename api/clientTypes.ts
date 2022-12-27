export type TimeInterval = {
    start: Date;
    end: Date;
};

export type HourPrice = {
    start: Date;
    price: number;
};

export type PeriodPriceData = {
    creationTime: Date;
    timeRange: TimeInterval;
    prices: HourPrice[];
};
