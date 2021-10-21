let filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    let text = e.target.value.toUpperCase();
    let main = document.getElementById('cont');
    let tr = main.getElementsByTagName('tr')
    
    for(var i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        
        if(td) {
            let textV = td.textContent || td.innerHTML;

            if(textV.toUpperCase().indexOf(text) > -1) {
                tr[i].style.display="block";
            }else {
                tr[i].style.display = "none";
            }
        }
    }
}


let notification = document.getElementById('circ');
let vis1 = document.getElementById('name1');
let but1 = document.getElementById('del1');
let vis2 = document.getElementById('name2');
let but2 = document.getElementById('del2');
let vis3 = document.getElementById('name3');
let but3 = document.getElementById('del3');
let vis4 = document.getElementById('name4');
let but4 = document.getElementById('del4');
let vis5 = document.getElementById('name5');
let but5 = document.getElementById('del5');
let vis6 = document.getElementById('name6');
let but6 = document.getElementById('del6');
let currency1 = document.getElementById('currency1');
let currency2 = document.getElementById('currency2');
let currency3 = document.getElementById('currency3');
let currency4 = document.getElementById('currency4');
let currency5 = document.getElementById('currency5');
let currency6 = document.getElementById('currency6');
let amount1 = document.getElementById('amount1');
let amount2 = document.getElementById('amount2');
let amount3 = document.getElementById('amount3');
let amount4 = document.getElementById('amount4');
let amount5 = document.getElementById('amount5');
let amount6 = document.getElementById('amount6');

let amount1V = parseInt(amount1.textContent);
let amount2V = parseInt(amount2.textContent);
let amount3V = parseInt(amount3.textContent);
let amount4V = parseInt(amount4.textContent);
let amount5V = parseInt(amount5.textContent);
let amount6V = parseInt(amount6.textContent);
let total = document.getElementById('amountT');
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let first = document.getElementById('first');
let change = document.getElementById('maddo');
change.addEventListener('click', changeThings)
let change2 = document.getElementById('maddo2');
change2.addEventListener('click', changeThings2)





var value = notification.innerHTML;
let deleteB = document.getElementsByClassName('del');
for(i = 0; i < deleteB.length; i++){
    deleteB[i].addEventListener('click', deleteButton)
}
let addButtons = document.querySelectorAll('#item');
for(i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener('click', increase)
}


//to increase notification
function increase(e){
    value++
    document.getElementById('circ').innerHTML = value;

    let iphone = e.target.className;

    if(iphone == "add1"){
        vis1.style.display = "inline";
        but1.style.display = "inline";
        currency1.style.display = "inline";
        amount1.style.display = "inline";
        amount1V = amount1V + 20
        document.getElementById('amount1').innerHTML = amount1V;
        alert('you added iphone 1 to cart')
        
    }
    if(iphone == "add2"){
        vis2.style.display = "inline";
        but2.style.display = "inline";
        currency2.style.display = "inline";
        amount2.style.display = "inline";
        amount2V = amount2V + 30
        document.getElementById('amount2').innerHTML = amount2V;
        alert('you added iphone 2 to cart')
    }
    if(iphone == "add3"){
        vis3.style.display = "inline";
        but3.style.display = "inline";
        currency3.style.display = "inline";
        amount3.style.display = "inline";
        amount3V = amount3V + 40
        document.getElementById('amount3').innerHTML = amount3V;
        alert('you added iphone 3 to cart')
    }
    if(iphone == "add4"){
        vis4.style.display = "inline";
        but4.style.display = "inline";
        currency4.style.display = "inline";
        amount4.style.display = "inline";
        amount4V = amount4V + 50
        document.getElementById('amount4').innerHTML = amount4V;
        alert('you added iphone 4 to cart')
    }
    if(iphone == "add5"){
        vis5.style.display = "inline";
        but5.style.display = "inline";
        currency5.style.display = "inline";
        amount5.style.display = "inline";
        amount5V = amount5V + 60
        document.getElementById('amount5').innerHTML = amount5V;
        alert('you added iphone 5 to cart')
    }
    if(iphone == "add6"){
        vis6.style.display = "inline";
        but6.style.display = "inline";
        currency6.style.display = "inline";
        amount6.style.display = "inline";
        amount6V = amount6V + 70
        document.getElementById('amount6').innerHTML = amount6V;
        alert('you added iphone 6 to cart')
    }

    total.innerHTML = amount1V + amount2V + amount3V + amount4V + amount5V + amount6V;

}

// delete button 
function deleteButton(e) {

    let remove = e.target.parentElement.id;
    
    if(remove === "tryC1" && confirm('remove')) {
        amount1V = amount1V - 20;
        document.getElementById('amount1').innerHTML = amount1V;
        --value
        document.getElementById('circ').innerHTML = value;
    }
    if (amount1V == 0) {
        vis1.style.display = "none";
        but1.style.display = "none";
        currency1.style.display = "none";
        amount1.style.display = "none";
    }
    if(remove === "tryC2" && confirm('remove')) {
        amount2V = amount2V - 30
        document.getElementById('amount2').innerHTML = amount2V;
        --value
        document.getElementById('circ').innerHTML = value;
    }
    if (amount2V == 0) {
        vis2.style.display = "none";
        but2.style.display = "none";
        currency2.style.display = "none";
        amount2.style.display = "none";
    }
    if(remove === "tryC3" && confirm('remove')) {
        amount3V = amount3V - 40
        document.getElementById('amount3').innerHTML = amount3V;
        --value
        document.getElementById('circ').innerHTML = value;
    }
    if(amount3V == 0){
        vis3.style.display = "none";
        but3.style.display = "none";
        currency3.style.display = "none";
        amount3.style.display = "none";
    }
    if(remove === "tryC4" && confirm('remove')) {
        amount4V = amount4V - 50
        document.getElementById('amount4').innerHTML = amount4V;
        --value
        document.getElementById('circ').innerHTML = value;
    }
    if(amount4V == 0) {
        vis4.style.display = "none";
        but4.style.display = "none";
        currency4.style.display = "none";
        amount4.style.display = "none";
    }
    if(remove === "tryC5" && confirm('remove')) {
        amount5V = amount5V - 60
        document.getElementById('amount5').innerHTML = amount5V;
        --value
        document.getElementById('circ').innerHTML = value;
    }
    if(amount5V == 0) {
        vis5.style.display = "none";
        but5.style.display = "none";
        currency5.style.display = "none";
        amount5.style.display = "none";
    }
    if(remove === "tryC6" && confirm('remove')) {
        amount6V = amount6V - 70
        document.getElementById('amount6').innerHTML = amount6V;
        --value
        document.getElementById('circ').innerHTML = value;
    }
    if(amount6V == 0){
        vis6.style.display = "none";
        but6.style.display = "none";
        currency6.style.display = "none";
        amount6.style.display = "none";
    }
    total.innerHTML = amount1V + amount2V + amount3V + amount4V + amount5V + amount6V;

}

function changeThings(e) {
    container.style.display = "none";
    container2.style.display = "inline";
}
function changeThings2(e) {
    container2.style.display = "none";
    container.style.display = "inline";
    
}



    

    
   
