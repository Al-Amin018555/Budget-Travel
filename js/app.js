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

        const budget = document.getElementById('total-budget').innerText;
        const convertedBudget = parseInt(budget);
        if (convertedBudget - parseInt(price) < 0) {
            alert('please earn more to visit');
            return;
        }
        // console.log(event.target.parentNode.parentNode)
        event.target.parentNode.parentNode.style.backgroundColor = 'gray';
        event.target.setAttribute('disabled','');

        document.getElementById('total-budget').innerText = convertedBudget - parseInt(price);

        selectedContainer.appendChild(div);

        totalCost('total-cost', parseInt(price))
        grandTotal('grand-total')



    });
}
//total cost calculator
function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    sum = convertedTotalCost + value;
    setInnerText(id, sum);
}
//grand cost calculator
function grandTotal(category) {

    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);

    if (category === 'bus') {
        const availableBudget = document.getElementById('total-budget').innerText;
        if(availableBudget - 100 < 0){
            alert('please earn more to visit');
            return;
        }    
        document.getElementById('total-budget').innerText = availableBudget - 100;
        setInnerText('grand-total', convertedTotalCost + 100);

    }
    else if (category === 'train') {
        const availableBudget = document.getElementById('total-budget').innerText;
        if(availableBudget - 200 < 0){
            alert('please earn more to visit');
            return;
        } 
        document.getElementById('total-budget').innerText = availableBudget - 200;
        setInnerText('grand-total', convertedTotalCost - 200);
    }
    else if (category === 'flight') {
        const availableBudget = document.getElementById('total-budget').innerText;
        if(availableBudget - 500 < 0){
            alert('please earn more to visit');
            return;
        } 
        document.getElementById('total-budget').innerText = availableBudget - 500;
        setInnerText('grand-total', convertedTotalCost + 500);
    }
    else {
        setInnerText('grand-total', convertedTotalCost);
    }


}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}