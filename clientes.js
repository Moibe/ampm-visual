function getDatosCliente(){

//obten los países.
jsonClientes = JSON.parse(clientes);
console.log("Éstos son los clientes...");
console.log(jsonClientes);

item = 'Spain';
cliente_especifico = jsonClientes[item];


elementos = document.getElementById('elementos');
elementos.innerHTML = cliente_especifico['Name'];


}



