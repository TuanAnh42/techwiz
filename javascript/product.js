const xhttp = new XMLHttpRequest();
console.log("hi");
var filters = [];
xhttp.onload = function () {
    data = JSON.parse(this.responseText);
    filterwoman = data.filter(function (list, index, array) {
        return list.sex == 'Woman';
    })
    filterman = data.filter(function (list, index, array) {
        return list.sex == 'Man';
    })
    filtermenu = data.filter(function (list, index, array) {
        return list.category == 'Blazers';
    })

    s = '';
    for (i = 0; i < data.length; i++) {
        s += `<a href="show-product.html#${data[i].id}">
                <div class="sp">
                <div class="img_sp">               
                    <img src="img/product/${data[i].image}">
                </div>
                <div class="tt_sp">
                <h4>${data[i].name} </h4>
                <p>${data[i].price}</p>
                </div>
                </div>
                </a>`;
    }
    document.getElementById("products").innerHTML = s;

}
function woman() {
    console.log(filterwoman);
    w = '';
    for (i = 0; i < filterwoman.length; i++) {
        w += `<a href="product.html#${filterwoman[i].id}">
                <div class="sp">
                <div class="img_sp">               
                    <img src="img/product/${filterwoman[i].image}">
                </div>
                <div class="tt_sp">
                <h4>${filterwoman[i].name} </h4>
                <p>${filterwoman[i].price}</p>
                
                </div>
                </div>
                </a>`;

    }
    document.getElementById("products").innerHTML = w;
}
function man() {
    console.log(filterman);
    m = '';
    for (i = 0; i < filterman.length; i++) {
        m += `<a href="product.html#${filterman[i].id}">
        <a href="show-product.html#${filtermenu[i].id}">
        <div class="sp">
        <div class="img_sp">               
            <img src="img/product/${filterman[i].image}">
        </div>
        <div class="tt_sp">
        <h4>${filterman[i].name} </h4>
        <p>${filterman[i].price}</p>
        </div>
        </div>
                    </a>`;

    }
    document.getElementById("products").innerHTML = m;
}
function menu() {
    console.log(filtermenu);
    l = '';
    for (i = 0; i < filtermenu.length; i++) {
        l += `<a href="product.html#${filtermenu[i].id}">
       
        <div class="sp">
        <div class="img_sp">               
            <img src="img/product/${filtermenu[i].image}">
        </div>
        <div class="tt_sp">
        <h4>${filtermenu[i].name} </h4>
        <p>${filtermenu[i].price}</p>
        </div>
        </div>
                        </a>
                        </a>`;

    }
    document.getElementById("products").innerHTML = l;
}
xhttp.open("GET", "data/db.json", true);
xhttp.send();



