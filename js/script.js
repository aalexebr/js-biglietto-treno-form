const generate = document.getElementById("submit")
generate.addEventListener("click",
    function(){
        const km = parseFloat(document.getElementById("km").value);
        if(isNaN(km)){
            alert('idiot')
        }
        else{
            const select = document.getElementById('age').value; 
            // remove .value from above for below to work
            // const value = select.options[select.selectedIndex].value;
            const minor = document.getElementById('minor').value
            const over = document.getElementById('over').value
          
            let price = km * 0.21
            document.getElementById("discountType").innerHTML = "Prezzo standard"
           
            // condition in a secect if previous comment on select below must be value instead
            if(select == minor){
                price -= price * 0.2
                document.getElementById("discountType").innerHTML = "Prezzo ridotto"
            }
            else if(select == over){
                price -= price * 0.4
                document.getElementById("discountType").innerHTML = "Prezzo over65"
            }
            
            document.getElementById('cost').innerHTML = price.toFixed(2) + '$'
            
            // adding the value from input and putting it in html
            const name = document.getElementById("name").value
            document.getElementById("passName").innerHTML = name

            // adding random number generator
            let carrigeNumber = Math.floor(Math.random()*(10 - 1 + 1) + 1)
            document.getElementById("carrige").innerHTML = carrigeNumber

            let ticketCode = Math.floor(Math.random()*(9999 - 1000 +1) + 1000)
            document.getElementById("ticketCode").innerHTML = ticketCode
        }
    }
    
);
