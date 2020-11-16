var cleaveLastName = new Cleave('.input-lastName', {
    blocks:[1],
    uppercase: true,
});


var cleavePhoneNumber = new Cleave('.input-phoneNumber', {
    phone: true,
    blocks: [3,2,2,2,2],
    prefix: "+33",

});

var cleaveOrderDate = new Cleave('.input-orderDate', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});



var cleaveCreditCard = new Cleave('.input-creditCard', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        document.getElementById('creditCard').innerHTML = type;
    }
});
