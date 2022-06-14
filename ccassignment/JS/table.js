var cart1 = [];

function loadCart() {
     cart1 = JSON.parse(
     localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]');
}

function viewcart(){
            loadCart();
            $('#tb').html('');
            t=1;
            total=0;
            for (i of cart1) {
                total+=(i.quantity*i.price);
                var rows = $('<tr>'+
                    '<th>' + t + '</th>'+
                    '<td>' + i.name + '</td>'+
                    '<td>' + '$'+i.price + '</td>'+
                    '<td><div class="row">'+
                    '<div class="col-3">' + i.quantity + '</div>'+
                    '<div class="col-4" align = "right"><button class="add" id=add'+t+'>+</button><button class="reduce" id=reduce'+t+'>-</button></div>'+
                    '</div></td>'+
                    '<td>' + '$'+ (i.quantity*i.price) + '</td>');
               $(rows).appendTo('#tb');
               t++;
            }
            $('<tr>'+'<th colspan="4">Total</th>'+
                '<td>'+ '$' + total + '</td>'
            ).appendTo('#tb');
}

$(function(){
    viewcart();
    $(document).delegate('.add', 'click', function(){
        var ro = document.getElementById(this.id).parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
        for(i of cart1)
        {
            if(i.name==ro.innerText)
            {
                i.quantity++;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart1));
        viewcart();
    })
    $(document).delegate('.reduce', 'click', function(){
        var ro = document.getElementById(this.id).parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
        for(i of cart1)
        {
            if(i.name==ro.innerText && i.quantity>0)
            {
                i.quantity--;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart1));
        viewcart();
    })
    $('#homebtn').click(function(){
        
        window.location='index.html';
    })
})