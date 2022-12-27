export interface PublicationMarketDocumentClass {
    xmlns: string;
}

export interface ReceiverMarketParticipantMRID {
    codingScheme: string;
}

export interface MRid {
    _: string;
    $: ReceiverMarketParticipantMRID;
}

export interface Point {
    position: string[];
    "price.amount": string[];
}

export interface TimeInterval {
    start: string[];
    end: string[];
}

export interface Period {
    timeInterval: TimeInterval[];
    resolution: string[];
    Point: Point[];
}

export interface TimeSery {
    mRID: string[];
    businessType: string[];
    "in_Domain.mRID": MRid[];
    "out_Domain.mRID": MRid[];
    "currency_Unit.name": string[];
    "price_Measure_Unit.name": string[];
    curveType: string[];
    Period: Period[];
}

export interface PublicationMarketDocument {
    $: PublicationMarketDocumentClass;
    mRID: string[];
    revisionNumber: string[];
    type: string[];
    "sender_MarketParticipant.mRID": MRid[];
    "sender_MarketParticipant.marketRole.type": string[];
    "receiver_MarketParticipant.mRID": MRid[];
    "receiver_MarketParticipant.marketRole.type": string[];
    createdDateTime: Date[];
    "period.timeInterval": TimeInterval[];
    TimeSeries: TimeSery[];
}

export interface ServerDayAheadData {
    Publication_MarketDocument: PublicationMarketDocument;
}
