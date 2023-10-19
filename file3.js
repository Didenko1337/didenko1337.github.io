window.onload = function() {
    document.getElementById("for").addEventListener("submit", function(PA) {
        PA.preventDefault();
        let count = document.getElementById("count").value;
        let order = document.getElementById("order");
        let PriceEl = order.options[order.selectedIndex];
        let Price = PriceEl.getAttribute("price");
        if (/^\d+$/.test(count) && count >= 0) 
        {
            count = Number(count);
            document.getElementById("result").innerHTML = count * Price;
        } 
        else 
        {
            document.getElementById("result").innerHTML = "Неправильно, попробуй еще раз))";
        }
    });
};  