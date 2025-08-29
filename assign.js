
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



    if (coin < 20) {
        alert('You Do Not Have Enough Coin To Make Call')
        return false;
    }

    else (alert(message))
    document.getElementById('coin-store').innerText = coin - 20;
    return true;
}








//  History Section///




const transactionData = []

function history() {
    let callHistorys = document.getElementById('call-history')

    callHistorys.innerHTML = `
    <div class=" call-history   flex justify-between"  >
                  <h3 class="font-bold mt-2 text-[15px]"><i class="fa-regular fa-clock"></i>Call History</h3>
                 <button id='clear-btn' class="w-[100px] h-[40px] bg-[#00A63E] rounded-[30px] text-white">Clear</button>

            </div>
    `

    for (const data of transactionData) {
        const div = document.createElement('div');
        div.className = " trans-class bg-slate-100 w-[250px] p-2  flex justify-between items-center mt-4 rounded-[10px]";
        div.innerHTML = `
        <div>
        <h3 class="font-semibold text-[14px]">${data.name}</h3>
        <p class=" text-[14px]">${data.number}</p>
        </div>
        <div class=" font-semibold text-[14px]">${data.time}</div>

        `;
        callHistorys.appendChild(div);
    }

    document.getElementById('clear-btn').addEventListener('click', function () {
        transactionData.length = 0;
        history();
    })

}

//  Button Click

document.getElementById('call-btn').addEventListener('click', function () {
    if (collButton('Calling National Emergency Service 999')) {

        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "National Emergency Number",
            number: "999",
            time: time
        })

        history();
    }
})




document.getElementById('call-btn2').addEventListener('click', function () {
    if (collButton('Calling Police Helpline Number 999')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Police Helpline Number",
            number: "999",
            time: time
        }
        )
    }

    history();
})
document.getElementById('call-btn3').addEventListener('click', function () {
    if (collButton('Calling Fire Service Helpline 999')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Fire Service Number",
            number: "999",
            time: time
        })
    }

    history();
})
document.getElementById('call-btn4').addEventListener('click', function () {
    if (collButton('Calling Ambulance Service 1994-999999')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Ambulance Service",
            number: "1994-999999",
            time: time
        })
    }

    history();
})
document.getElementById('call-btn5').addEventListener('click', function () {
    if (collButton('Calling Women & Child Helpline 109')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Women & Child Helpline",
            number: "109",
            time: time
        })
    }

    history();
})
document.getElementById('call-btn6').addEventListener('click', function () {
    if (collButton('Calling Anti-Corruption Helpline 106')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Anti-Corruption Helpline",
            number: "106",
            time: time
        })
    }

    history();
})
document.getElementById('call-btn7').addEventListener('click', function () {
    if (collButton('Calling Electricity Helpline Number 16216')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Electricity Helpline",
            number: "16216",
            time: time
        })
    }

    history();
})
document.getElementById('call-btn8').addEventListener('click', function () {
    if (collButton('Calling Brac Helpline 16445')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Brac Helpline",
            number: "16445",
            time: time
        })
    }

    history();
})
document.getElementById('call-btn9').addEventListener('click', function () {
    if (collButton('Calling Bangladesh Railway Helpline 163')) {
        const time = new Date().toLocaleTimeString();
        transactionData.push({
            name: "Bangladesh Railway Helpline ",
            number: "163",
            time: time
        })
    }

    history();
})




// copy button section 



function increaseCopy() {
    let copyNum = parseInt(document.getElementById('copy-num').innerText)

    document.getElementById('copy-num').innerText = copyNum + 1;

    // alert('Text Copy')


}

document.getElementById('copy-btn').addEventListener('click', increaseCopy)
document.getElementById('copy-btn2').addEventListener('click', increaseCopy)
document.getElementById('copy-btn3').addEventListener('click', increaseCopy)
document.getElementById('copy-btn4').addEventListener('click', increaseCopy)
document.getElementById('copy-btn5').addEventListener('click', increaseCopy)
document.getElementById('copy-btn6').addEventListener('click', increaseCopy)
document.getElementById('copy-btn7').addEventListener('click', increaseCopy)
document.getElementById('copy-btn8').addEventListener('click', increaseCopy)
document.getElementById('copy-btn9').addEventListener('click', increaseCopy)




// to copy the text   ///


function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
        alert("কপি হয়েছে: " + text);
    } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        alert("কপি হয়েছে (fallback): " + text);
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const copyButtons = document.querySelectorAll('[id^="copy-btn"], .copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".bg-white") || btn.closest(".card");
            if (!card) {
                alert("কার্ড খুঁজে পাওয়া যায়নি!");
                return;
            }

            const numberEl = card.querySelector("h2");
            if (!numberEl) {
                alert("নাম্বার পাওয়া যায়নি!");
                return;
            }

            const number = numberEl.innerText.trim();
            copyTextToClipboard(number);
        });
    });
});
