function updateNumber(caseId, add, total, price) {
    const productInput = document.getElementById(caseId);
    let productNumber = parseInt(productInput.value);
    if (add == true) {
        productNumber = productNumber + 1;

    } else if (productInput.value > 0) {

        productNumber = parseInt(productInput.value) - 1;
    }
    productInput.value = productNumber;

    // update h5
    const caseTotal = document.getElementById(total);

    caseTotal.innerText = productNumber * price;

    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}

// const forCase = getInputValue('case');
// const forPhone = getInputValue('phone');

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}



document.getElementById('case-plus').addEventListener('click', function() {
    updateNumber('case-number', true, 'case-total', 59);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateNumber('case-number', false, 'case-total', 59);
})

// for phone 


document.getElementById('phone-plus').addEventListener('click', function() {
    updateNumber('phone-number', true, 'phone-total', 1219);
})

document.getElementById('phone-minus').addEventListener('click', function() {
    updateNumber('phone-number', false, 'phone-total', 1219);
})



// function updateproductNumber(caseId, add) {
//     const productInput = document.getElementById(caseId);
//     let productNumber = parseInt(productInput.value);
//     if (add == true) {
//         productNumber = productNumber + 1;

//     } else if (productInput.value > 0) {

//         productNumber = parseInt(productInput.value) - 1;
//     }
//     productInput.value = productNumber;

//     // update h5
//     const caseTotal = document.getElementById('phone-total');
//     caseTotal.innerText = productNumber * 1219;
// }

// document.getElementById('phone-plus').addEventListener('click', function() {
//     updateproductNumber('phone-number', true);
// })

// document.getElementById('phone-minus').addEventListener('click', function() {
//     updateproductNumber('phone-number', false);
// })