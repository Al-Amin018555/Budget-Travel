// function handleSelect(){
//     console.log('boss click korsi');
// }

const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        // console.log('boss click korsi');
        count++;
        setInnerText('cart-count', count);

        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        // console.log(event.target.parentNode.childNodes[3].childNodes[1].innerText);

        const selectedContainer = document.getElementById('selected-places-container');

        const div = document.createElement('div');
        div.classList.add('flex', 'gap-2', 'justify-center');

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p')
        p2.innerText = price;

        div.appendChild(p);
        div.appendChild(p2);

        selectedContainer.appendChild(div);

        totalCost('total-cost', parseInt(price))
        grandTotal('grand-total',parseInt(price))



    });
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    sum = convertedTotalCost + value;
    setInnerText(id, sum);
}

function grandTotal(id, value) {
    const grandTotal = document.getElementById(id).innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    sum = convertedGrandTotal + value;
    setInnerText(id, sum)
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}