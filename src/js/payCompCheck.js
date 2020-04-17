export default function compCheck (data) {
    let dataArray = data.split('');
    let firstDigit = Number(dataArray[0]);
    let twoDigit = Number(dataArray[0] + dataArray[1]);
    if (firstDigit === 2) {
        return 'mir'
    } else if (firstDigit === 4) {
        return'visa'
    } else if (twoDigit === 34 || twoDigit === 37) {
        return 'amex'
    } else if (twoDigit === 51 || twoDigit === 52 || twoDigit === 53 || twoDigit === 54 || twoDigit === 55) {
        return 'mastercard'
    } else if (twoDigit === 60) {
        return'discover'
    }
}