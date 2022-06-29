function init(nodeparam){

    if(nodeparam==null){
        console.log("No recibí parámetro, sigo mi camino normal...");
       
        let display = document.getElementById('info_display');
        console.log("Esto es el display:");
        console.log(display);
        addTextRow("Hola mundo...", 1 ,"intro_uno", display);

        getDatosCliente();
        construyePaypal();
    }else{
        console.log("Estoy en INIT:");
        console.log("Esto es verifNode:" + nodeparam);
        console.log("Y como el verifNode es correcto entonces la venta fue un éxito.");

        //Desaparece info inicial.
        const infoMain = document.getElementById('info_main');
        infoMain.style.display = 'none';

        //Aparece info final.
        const infoPost = document.getElementById('info_post');
        infoPost.style.display = 'block';

       
    }
 
    
}

