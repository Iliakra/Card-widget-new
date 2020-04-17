export default function algLuna (data) {
    let sum = 0;
    let dataArray = data.split('');
    let checkDigit = Number(dataArray[dataArray.length-1]);
    let newArray = dataArray.slice(0,dataArray.length-1).reverse();
    if (newArray.length % 2 === 0) {
        for (let i=0; i <= newArray.length-2; i=i+2) {
            let element = newArray[i] * 2; 
            if (element > 9) {
                element = element - 9;
            }
            newArray[i] = element.toString();
        }
    } else {
        for (let i=0; i <= newArray.length-1; i=i+2) {
            let element = newArray[i] * 2; 
            if (element > 9) {
                element = element - 9;
            }
            newArray[i] = element.toString();
        }
    }
    for (let i=0; i< newArray.length; i++) {
        let number = Number(newArray[i]);
        sum += number;
    }
    let sumArray = sum.toString().split('');
    let unitNumber = Number(sumArray[sumArray.length-1]);
    let result = 10 - unitNumber;
    if (result === checkDigit && newArray.length === 15) {
        return true
    } else {
        return false
    }
}