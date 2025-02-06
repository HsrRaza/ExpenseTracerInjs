document.addEventListener('DOMContentLoaded', function () {



    const btnAddExpense = document.querySelectorAll('.btn');
    const inputValueExpense = document.getElementById('expenseInput');
    const incomeUpdate = document.getElementById('totalIncome');
    const balanceUpdate = document.getElementById('totalBlanace');
    const categorySelect = document.getElementById('opt')

    const dataTostored =  document.getElementById('box');




    let Totalamount = parseFloat(0);
    let store = [];



    btnAddExpense.forEach(function (e) {
        e.addEventListener("click", function (even) {
            if (even.target.id === "add") {

                getData();

            }

            else if (even.target.id === "reset") {
                Totalamount = `$${parseFloat(0).toFixed(2)}`;
                // console.log(Totalamount);
                incomeUpdate.textContent = Totalamount;
                balanceUpdate.textContent = Totalamount;


            };

        });
    });

    function getData() {
        const amount =parseFloat(inputValueExpense.value);

        const category = categorySelect.value;
        if (isNaN(amount) || amount <= 0 || inputValueExpense.value.trim() ==='' ) {
            alert("enter valid amount");
            return;
        } 
            
        store.push({ amount, category });

        Totalamount += amount;
        // console.log(Totalamount);


        incomeUpdate.textContent = `$${Totalamount.toFixed(2)}`;
        balanceUpdate.textContent = `$${Totalamount.toFixed(2)}`;

        inputValueExpense.value = '';
       
        const container = document.createElement('div');
        const  h3One = document.createElement('h3');
        const  h3Two = document.createElement('h3');
        h3Two.textContent =`$${Totalamount.toFixed(2)}`;
        h3One.textContent ="expene";
        container.appendChild(h3One);
        container.appendChild(h3Two);
        container.classList.add('data');
        
          
       dataTostored.appendChild(container);


        
       
        
    }
        
        











})







