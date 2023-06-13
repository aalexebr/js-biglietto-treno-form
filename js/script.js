const generate = document.getElementById("submit")
generate.addEventListener("click",
    function(){
        const km = parseFloat(document.getElementById("km").value);
        const select = document.getElementById('age');
        const value = select.options[select.selectedIndex].value;
        const minor = document.getElementById('minor').value
        const over = document.getElementById('over').value
        let price = km * 0.21
        if(value == minor){
            price -= price * 0.2
            console.log('minor', price )
        }
        else if(value == over){
            price -= price * 0.4
            console.log('over', price )
        }
        console.log('none', price )
        
       
    

        


    }
    
);
