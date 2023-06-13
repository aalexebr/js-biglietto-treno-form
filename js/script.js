const generate = document.getElementById("submit")
generate.addEventListener("click",
    function(){
        const km = parseFloat(document.getElementById("km").value);
        if(isNaN(km)){
            alert('idiot')
        }
        else{
            const select = document.getElementById('age');
            const value = select.options[select.selectedIndex].value;
            const minor = document.getElementById('minor').value
            const over = document.getElementById('over').value
            let price = km * 0.21
            document.getElementById("discountType").innerHTML = "Prezzo standard"
            if(value == minor){
                price -= price * 0.2
                document.getElementById("discountType").innerHTML = "Prezzo ridotto"
            }
            else if(value == over){
                price -= price * 0.4
                document.getElementById("discountType").innerHTML = "Prezzo over65"
            }
            console.log('final', price )
            document.getElementById('cost').innerHTML = price.toFixed(2) + '$'
            
        
            const name = document.getElementById("name").value
            document.getElementById("passName").innerHTML = name

            let carrigeNumber = Math.floor(Math.random()*(10 - 1 +1) + 1)
            document.getElementById("carrige").innerHTML = carrigeNumber

            let ticketCode = Math.floor(Math.random()*(9999 - 1000 +1) + 1000)
            document.getElementById("ticketCode").innerHTML = ticketCode
        }
    }
    
);
