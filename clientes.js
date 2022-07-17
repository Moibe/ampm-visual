function getDatosCliente(){



//obten los países.
jsonClientes = JSON.parse(clientes);
console.log("Éstos son los clientes...");
console.log(jsonClientes);

item = 'Spain';
cliente_especifico = jsonClientes[item];

elementos = document.getElementById('renglon1');
nombre = cliente_especifico['Name'];
texto_completo = "Hola " + nombre + " bienvenid@."
elementos.innerHTML = texto_completo;

}



