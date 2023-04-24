const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function() {
  
    const price = Number(document.getElementById("price").value)
    const customersQty = Number(document.getElementById("customersQty").value)
    const tax = Number(document.getElementById("tax").value)

  
    const iva = price*(tax/100)
    const totalPrice = price+iva

    const result = (totalPrice/customersQty).toFixed(2);
    const element = document.getElementById("result");
    element.innerHTML = "Amount to pay per person: "+result;
});