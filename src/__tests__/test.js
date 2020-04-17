import algLuna from '../js/algLuna.js'
import compCheck from '../js/payCompCheck.js'



test.each([
    ['true for valid card number', '4276380100560254', true],
    ['false for invalid card number', '79927398712', false],
])(('it should be %s'), (_, data, expected) => {
    expect(algLuna(data)).toBe(expected);
});


test.each([
    ['visa for card number', '4276380452560145', 'visa'],
    ['mastercard for card number', '557638010056025', 'mastercard'],
])(('it should be %s'), (_, data, expected) => {
    expect(compCheck(data)).toBe(expected);
});




