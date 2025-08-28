
// heart section /





function increaseHeart() {
    let heartNum = parseInt(document.getElementById('heart-num').innerText)

    document.getElementById('heart-num').innerText = heartNum + 1
}


document.getElementById('heart-ash').addEventListener('click', increaseHeart)
document.getElementById('heart-ash2').addEventListener('click', increaseHeart)
document.getElementById('heart-ash3').addEventListener('click', increaseHeart)
document.getElementById('heart-ash4').addEventListener('click', increaseHeart)
document.getElementById('heart-ash5').addEventListener('click', increaseHeart)
document.getElementById('heart-ash6').addEventListener('click', increaseHeart)
document.getElementById('heart-ash7').addEventListener('click', increaseHeart)
document.getElementById('heart-ash8').addEventListener('click', increaseHeart)
document.getElementById('heart-ash9').addEventListener('click', increaseHeart)



// Coin Section  ///


function collButton(message) {

    let coin = parseInt(document.getElementById('coin-store').innerText)



    if (coin < 19) {
        alert('You Do Not Have Enough Coin To Make Call')
        return;
    }

    else (alert(
        message
    ))
    document.getElementById('coin-store').innerText = coin - 20;
}



document.getElementById('call-btn').addEventListener('click', function () {
    collButton('Calling National Emergency Service 999')
});
document.getElementById('call-btn2').addEventListener('click', function () {
    collButton('Calling Police Helpline Number 999')
});
document.getElementById('call-btn3').addEventListener('click', function () {
    collButton('Calling Fire Service Helpline 999')
});
document.getElementById('call-btn4').addEventListener('click', function () {
    collButton('Calling Ambulance Service 1994-999999')
});
document.getElementById('call-btn5').addEventListener('click', function () {
    collButton('Calling Women & Child Helpline 109')
});
document.getElementById('call-btn6').addEventListener('click', function () {
    collButton('Calling Anti-Corruption Helpline 106')
});
document.getElementById('call-btn7').addEventListener('click', function () {
    collButton('Calling Electricity Helpline Number 16216')
});
document.getElementById('call-btn8').addEventListener('click', function () {
    collButton('Calling Brac Helpline 16445')
});
document.getElementById('call-btn9').addEventListener('click', function () {
    collButton('Calling Bangladesh Railway Helpline 163')
});
























// document.getElementById('call-btn2').addEventListener('click', collButton)
// document.getElementById('call-btn3').addEventListener('click', collButton)
// document.getElementById('call-btn4').addEventListener('click', collButton)
// document.getElementById('call-btn5').addEventListener('click', collButton)
// document.getElementById('call-btn6').addEventListener('click', collButton)
// document.getElementById('call-btn7').addEventListener('click', collButton)
// document.getElementById('call-btn8').addEventListener('click', collButton)
// document.getElementById('call-btn9').addEventListener('click', collButton)





//  clicking a card's Call Button, following actions will happen:
// Show an alert with a message including the service name and number
// Each call will cut 20 coins. Reduce Coin after each click.
// If coins are less than 20, show a relevant alert and terminate the process.
// Add this service into the Call History section with:
// Service name
// Service number
