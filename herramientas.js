function construyePaypal(){

    var paypalScript = document.createElement("script");
    console.log("CREANDO PAYPAL_SCRIPT");
    console.log(paypalScript);
    paypalScript.type = "text/javascript";
    paypalScript.id = "btnPaypal";
    //paypalScript.src = "https://www.coding-depot.dev/bundles/app/js/button.js?merchant=735A4R6642VWC";
    paypalScript.src = "/localpaypal.js?merchant=735A4R6642VWC";
    //Agregaremos los atributos....
    paypalScript.setAttribute("data-button", "donow");
    paypalScript.setAttribute("data-name", "Digital Download");
    paypalScript.setAttribute("data-amount", "5");
    paypalScript.setAttribute("data-currency", "USD");
    paypalScript.setAttribute("data-size", "small");
    paypalScript.setAttribute("data-noshipping", 1);
    paypalScript.setAttribute("data-return", "http://127.0.0.1:5500/paypalpromo.html");
    paypalScript.setAttribute("data-cancel_return", "http://127.0.0.1:5500/paypalpromo.html?verifNode=Ok");
    paypalScript.setAttribute("data-currency_code", "USD");
    paypalScript.setAttribute("data-locale", "es_ES");
    paypalScript.setAttribute("data-type", "form");
    paypalScript.setAttribute("async", "");

    console.log("Éste es el script construido:");
    console.log(paypalScript);

    // add the newly created element and its content into the DOM
    let divBtnPaypal = document.getElementById("btnPaypal");
    console.log("Esto es divBtnPaypal:");
    console.log(divBtnPaypal);
    const currentDiv = document.getElementById("referencia");
    console.log("Esto es currentdiv:");
    console.log(currentDiv);
    divBtnPaypal.insertBefore(paypalScript, currentDiv);

}