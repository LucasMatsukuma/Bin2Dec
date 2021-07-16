
function convert() {

    const number = document.querySelector('#number').value;
    const res = document.querySelector('div#res');
    const options = document.querySelector('#options').value;

    const binary = parseInt(number, 2);
    const decimal = Number(number).toString(2);

    if(number == '') {
        window.alert('Please, enter a number')
    }else {
        switch (options) {
            case 'binaryToDecimal': res.innerHTML = `${number} in decimal: ${binary}`;
            break;

            case 'decimalToBinary': res.innerHTML = `${number} in binary: ${decimal}`
            break;
        };
    };
};





