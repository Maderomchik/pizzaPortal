$(function() {
    let order = {
        "Imie": "",
        "Nazwisko": "",
        "Ulica": "",
        "Miasto": "",
        "Kod pocztowy": "",
        "Nr Domu": "",
        "sos": [],
        "pizza": ""
    }
    const pizza = [{
        id: 1,
        name: "wyberz",
        price: 25
    },
    {
        id: 2,
        name: "Pizza Chlopska",
        price: 50
    },
    {
        id: 3,
        name: "Pizza Salami",
        price: 18
    },
    {
        id: 4,
        name: "Pizza 4 Sery",
        price: 18
    },
    {
        id: 5,
        name: "Pizza Bogami",
        price: 24
    },
    {
        id:6,
        name: "Pizza Mala 4 sery",
        price: 30
    }
]
    let error=[]
 
    $('#showOrder').click(function () {

        $('.order').css({
            "display": "blok"
        })
    })
    $("#send").click(function () {
        if (checkValue($('#imie').val())) {
            order.imie = $('#imie').val()
        } else {
            error.push('nie podalem imeni');
        }
            if (checkValue($('#Nazwisko').val())) {
                order.Nazwisko = $('#Nazwisko').val()
            } else {
                error.push('Nie podalem Nazwisko');
            }
            if (checkValue($('#Ulica').val())) {
                order.Ulica = $('#Ulica').val()
            } else {
                error.push('nie podalem Ulicy');
            }
            if (checkValue($('#Miasto').val())) {
                order.imie = $('#Miasto').val()
            } else {
                error.push('nie podalem Miasto');
            }
            if (checkValue($('#Kod').val())) {
                order.imie = $('#Kod').val()
            } else {
                error.push('nie podalem Kod');
            }
            if (checkValue($('#NrDom').val())) {
                order.imie = $('#NrDom').val()
            } else {
                error.push('nie podalem NrDom');
            }
        })
            
            
            // console.log($'#')
            // console.log(order)
            // console.log(error)

            error = []
            function checkValue(val) {
                if(val) {
                    return true
                }     
            }
})

order.imie = ""
