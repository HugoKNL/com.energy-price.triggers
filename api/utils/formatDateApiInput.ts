// TODO: Hier zit een fout in!!
const parseNumberLeadingZero = (
    number: number,
    totalLength: number
): string => {
    let result = number.toString();
    while (result.length < totalLength) result = `0${result}`;
    return result;
};

const parseApiDateString = (dateToFormat: Date): string => {
    const year = dateToFormat.getFullYear();
    const month = parseNumberLeadingZero(dateToFormat.getMonth() + 1, 2);
    const day = parseNumberLeadingZero(dateToFormat.getDate(), 2);
    const hour = parseNumberLeadingZero(dateToFormat.getHours(), 2);
    const minute = parseNumberLeadingZero(dateToFormat.getMinutes(), 2);
    return `${year}${month}${day}${hour}${minute}`;
};

export default parseApiDateString;
